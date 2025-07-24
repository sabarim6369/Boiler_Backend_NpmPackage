#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

function copyTemplateDir(srcDir, destDir) {
  if (!fs.existsSync(destDir)) fs.mkdirSync(destDir, { recursive: true });

  fs.readdirSync(srcDir).forEach(file => {
    const srcFile = path.join(srcDir, file);
    const destFile = path.join(destDir, file);

    const stat = fs.statSync(srcFile);
    if (stat.isDirectory()) {
      copyTemplateDir(srcFile, destFile);
    } else {
      fs.copyFileSync(srcFile, destFile);
      console.log(`Created ${destFile}`);
    }
  });
}

const templatePath = path.join(__dirname, 'templates');
const targetPath = process.cwd(); // current folder

copyTemplateDir(templatePath, targetPath);

try {
  console.log('\n📦 Installing dependencies...');
  execSync('npm install', { cwd: targetPath, stdio: 'inherit' });
  console.log('\n✅ Backend boilerplate ready to use!');
  console.log('💡 Provide the MongoDB URI in the `.env` file to continue without error.\n');

} catch (err) {
  console.error('\n❌ Failed to install dependencies:', err.message);
}
