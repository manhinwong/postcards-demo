#!/usr/bin/env node

/**
 * Script to create a new postcard from template
 * Usage: node scripts/create-postcard.js <recipient-name>
 * Example: node scripts/create-postcard.js sarah
 */

import { readFileSync, writeFileSync, mkdirSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rootDir = join(__dirname, '..');

// Get recipient name from command line
const recipientSlug = process.argv[2];

if (!recipientSlug) {
  console.error('\n❌ Error: Please provide a recipient name');
  console.log('\nUsage: node scripts/create-postcard.js <recipient-name>');
  console.log('Example: node scripts/create-postcard.js sarah\n');
  process.exit(1);
}

// Capitalize first letter for display name
const recipientName = recipientSlug.charAt(0).toUpperCase() + recipientSlug.slice(1).toLowerCase();
const slugLower = recipientSlug.toLowerCase();

console.log(`\n📮 Creating postcard for ${recipientName}...\n`);

try {
  // Read template
  const templatePath = join(rootDir, 'src/data/_template.js');
  let template = readFileSync(templatePath, 'utf8');

  // Replace placeholders (replace more specific pattern first!)
  template = template.replace(/RECIPIENT_NAME_Postcard/g, `${slugLower}Postcard`);
  template = template.replace(/RECIPIENT_NAME/g, recipientName);

  // Write new postcard file
  const newFilePath = join(rootDir, `src/data/${slugLower}.js`);
  writeFileSync(newFilePath, template);
  console.log(`✅ Created data file: src/data/${slugLower}.js`);

  // Read and update postcards.js registry
  const registryPath = join(rootDir, 'src/data/postcards.js');
  let registry = readFileSync(registryPath, 'utf8');

  // Add import statement after the last import
  const importStatement = `import { ${slugLower}Postcard } from './${slugLower}';`;
  const lastImportMatch = registry.match(/import.*from.*;\n/g);
  if (lastImportMatch) {
    const lastImport = lastImportMatch[lastImportMatch.length - 1];
    registry = registry.replace(lastImport, lastImport + importStatement + '\n');
  }

  // Add to postcards object
  const postcardEntry = `  ${slugLower}: ${slugLower}Postcard,`;
  registry = registry.replace(
    /export const postcards = \{/,
    `export const postcards = {\n${postcardEntry}`
  );

  writeFileSync(registryPath, registry);
  console.log(`✅ Updated registry: src/data/postcards.js`);

  // Create photos directory reminder
  console.log('\n📸 Next steps:\n');
  console.log(`1. Add photos/videos to: public/photos/${slugLower}/`);
  console.log(`   - Create the folder first: mkdir -p public/photos/${slugLower}`);
  console.log(`   - Name them: ${slugLower}-memory-1.JPG, ${slugLower}-memory-2.JPG, etc.`);
  console.log(`   - Include a video: ${slugLower}-video.MOV (optional)\n`);
  console.log(`2. Edit the postcard data: src/data/${slugLower}.js`);
  console.log(`   - Customize messages, questions, and captions`);
  console.log(`   - Update photo/video filenames to match what you uploaded\n`);
  console.log(`3. Test locally: npm run dev`);
  console.log(`   - Visit: http://localhost:5173/${slugLower}\n`);
  console.log(`4. Deploy to Vercel:`);
  console.log(`   - git add .`);
  console.log(`   - git commit -m "Add postcard for ${recipientName}"`);
  console.log(`   - git push`);
  console.log(`   - Vercel will auto-deploy!\n`);
  console.log(`5. Share link: https://marcus-postcards.vercel.app/${slugLower}\n`);

} catch (error) {
  console.error('\n❌ Error creating postcard:', error.message);
  process.exit(1);
}

