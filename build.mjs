// Builds surf-n-chomp.html: the whole game, Three.js included, in one file that plays offline.
// index.html stays the readable source (it loads Three.js from a CDN); run `npm run build` after editing it.
import { readFileSync, writeFileSync, mkdtempSync, rmSync } from 'node:fs';
import { join } from 'node:path';
import { tmpdir } from 'node:os';
import { build } from 'esbuild';

const html = readFileSync('index.html', 'utf8');
const moduleStart = html.indexOf('<script type="module">');
const moduleEnd = html.indexOf('</script>', moduleStart);
const importMap = /<script type="importmap">[\s\S]*?<\/script>\n?/;
if (moduleStart < 0 || !importMap.test(html)) throw new Error('index.html is missing its module script or import map');

const dir = mkdtempSync(join(tmpdir(), 'surf-n-chomp-'));
const entry = join(dir, 'game.js');
writeFileSync(entry, html.slice(moduleStart + '<script type="module">'.length, moduleEnd));
const result = await build({
  entryPoints: [entry],
  bundle: true,
  minify: true,
  format: 'iife',
  target: 'es2020',
  write: false,
  nodePaths: [join(process.cwd(), 'node_modules')],
  legalComments: 'none',
});
rmSync(dir, {recursive: true});

// Keep the bundle from closing the <script> tag early.
const code = result.outputFiles[0].text.replace(/<\/script/gi, '<\\/script');
const out = html.slice(0, moduleStart).replace(importMap, '') + `<script>\n${code}</script>` + html.slice(moduleEnd + '</script>'.length);
writeFileSync('surf-n-chomp.html', out);
console.log(`surf-n-chomp.html: ${(out.length / 1024).toFixed(0)} KB`);
