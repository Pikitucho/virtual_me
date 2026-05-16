const fs = require('node:fs');
const path = require('node:path');

const rootDir = path.resolve(__dirname, '..');
const outDir = path.join(rootDir, 'dist');
const entriesToCopy = ['index.html', 'src', 'docs', 'README.md'];

fs.rmSync(outDir, { recursive: true, force: true });
fs.mkdirSync(outDir, { recursive: true });

for (const entry of entriesToCopy) {
  const source = path.join(rootDir, entry);
  const destination = path.join(outDir, entry);

  if (!fs.existsSync(source)) {
    throw new Error(`Build input is missing: ${entry}`);
  }

  fs.cpSync(source, destination, { recursive: true });
}

console.log(`Static site built in ${path.relative(rootDir, outDir)}/`);
