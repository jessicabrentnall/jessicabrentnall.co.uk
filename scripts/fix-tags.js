// simple Node script to move tag HTML files into directories
// Usage: run from project root after `jekyll build` (workspace/site/_site must exist)

const fs = require('fs');
const path = require('path');

const siteDir = path.join(__dirname, '../site/_site/tag');

if (!fs.existsSync(siteDir)) {
  console.warn('No tag directory found, skipping');
  process.exit(0);
}

const files = fs.readdirSync(siteDir).filter(f => f.endsWith('.html'));
for (const file of files) {
  const name = file.replace(/\.html$/,'');
  const src = path.join(siteDir, file);
  const destDir = path.join(siteDir, name);
  const dest = path.join(destDir, 'index.html');
  fs.mkdirSync(destDir, { recursive: true });
  fs.renameSync(src, dest);
}

console.log(`Rewrote ${files.length} tag pages to directory indexes`);
