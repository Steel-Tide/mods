#!/usr/bin/env node
/**
 * Write index.json — what the game's Settings → Mods and steelti.de/mods
 * read: one entry per folder under mods/ that validates, with the defs and
 * sheets summarised, each sheet's and screenshot's pixel size for the pages'
 * layout, when it last changed and how often it has been installed. Run by
 * CI on every push to main and nightly (for the counts); run it yourself to
 * see what the entry for your mod will look like.
 *
 *   node tools/build-index.mjs [--counts <file>]
 *
 * `--counts` is the file tools/sync-release.mjs writes: the download count
 * per mod id, from the release the packed mods are attached to. Without it,
 * the counts already in index.json are kept.
 */
import { execFileSync } from 'node:child_process';
import { existsSync, readdirSync, readFileSync, statSync, writeFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { imageSize, indexEntryFor, modRegistryBase, parseMod, parseModIndex } from './steel-tide-mod.mjs';

const here = dirname(fileURLToPath(import.meta.url));
const root = resolve(here, '..');
const args = process.argv.slice(2);
const countsFile = args.includes('--counts') ? resolve(args[args.indexOf('--counts') + 1]) : null;

function lastChange(path) {
  try {
    return execFileSync('git', ['log', '-1', '--format=%cI', '--', path], { cwd: root, encoding: 'utf8' }).trim() || undefined;
  } catch {
    return undefined;
  }
}

// the counts: the sync's file, else what the last index said
let counts = {};
if (countsFile && existsSync(countsFile)) counts = JSON.parse(readFileSync(countsFile, 'utf8'));
else if (existsSync(join(root, 'index.json'))) {
  const last = parseModIndex(readFileSync(join(root, 'index.json'), 'utf8'));
  for (const m of last?.mods ?? []) if (m.downloads !== undefined) counts[m.id] = m.downloads;
}

const mods = [];
for (const name of readdirSync(join(root, 'mods')).sort()) {
  const folder = join(root, 'mods', name);
  if (!statSync(folder).isDirectory() || !existsSync(join(folder, 'mod.json'))) continue;
  const parsed = parseMod(readFileSync(join(folder, 'mod.json'), 'utf8'));
  if (!parsed.ok || parsed.mod.id !== name) {
    console.warn(`skipping mods/${name}: ${parsed.ok ? 'id does not match the folder' : 'does not validate'}`);
    continue;
  }
  // every picture's size, sheets and screenshots alike, by the path the manifest names
  const sizes = {};
  for (const file of [...(parsed.mod.sprites ?? []).map((s) => s.file), ...(parsed.mod.screenshots ?? [])]) {
    const path = join(folder, file);
    if (!existsSync(path)) continue;
    const size = imageSize(readFileSync(path));
    if (size) sizes[file] = size;
  }
  mods.push(indexEntryFor(parsed.mod, `mods/${name}`, modRegistryBase(name), { sizes, updated: lastChange(`mods/${name}`), downloads: counts[name] ?? 0 }));
}

const index = { format: 'steel-tide-mod-index', v: 1, generated: new Date().toISOString(), mods };
writeFileSync(join(root, 'index.json'), JSON.stringify(index, null, 2) + '\n');
console.log(`index.json: ${mods.length} mod${mods.length === 1 ? '' : 's'}`);
