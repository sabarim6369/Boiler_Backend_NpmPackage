#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const prompts = require('prompts');

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

(async () => {
  const boilerplateResponse = await prompts({
    type: 'select',
    name: 'boilerplate',
    message: 'Which backend boilerplate do you want to use?',
    choices: [
      { title: 'Express (REST API)', value: 'express' },
      { title: 'GraphQL (Apollo Server)', value: 'graphql' },
      { title: 'gRPC (Client + Server)', value: 'Grpc' }   // ✅ Added gRPC option
    ]
  });

  const boilerplateChoice = boilerplateResponse.boilerplate;

  if (!boilerplateChoice) {
    console.error("❌ No boilerplate option selected. Exiting.");
    process.exit(1);
  }

  const folderResponse = await prompts({
    type: 'text',
    name: 'folderName',
    message: 'Enter your project folder name:',
    validate: name => {
      if (!name || name.trim() === '') return 'Project folder name cannot be empty';
      if (fs.existsSync(path.join(process.cwd(), name))) return 'Folder already exists';
      return true;
    }
  });

  const folderName = folderResponse.folderName;

  if (!folderName) {
    console.error("❌ No folder name provided. Exiting.");
    process.exit(1);
  }

  const templatePath = path.join(__dirname, 'templates', boilerplateChoice);
  const targetPath = path.join(process.cwd(), folderName);

  copyTemplateDir(templatePath, targetPath);

  try {
    console.log('\n📦 Installing dependencies...');
    execSync('npm install', { cwd: targetPath, stdio: 'inherit' });
    console.log(`\n✅ ${boilerplateChoice.toUpperCase()} backend boilerplate ready in folder '${folderName}'!`);
    console.log('💡 Update your .env file and start coding!\n');
  } catch (err) {
    console.error('\n❌ Failed to install dependencies:', err.message);
  }
})();
