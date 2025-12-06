// convertTokensToScss.ts
// This script converts a JSON file exported from Tokens Studio (Figma) to a SCSS file.
// Procedure:
// 1. Run the script: npm run convertTokensToScss
// 2. The script will convert the JSON file to a SCSS file
// 3. The SCSS file will be saved in the scripts/figma-tokens directory
// 4. The SCSS file will be named figma-tokens.scss
// 5. The SCSS file will be saved in the scripts/figma-tokens directory
// 6. The SCSS file will be named figma-tokens.scss
// 7. The SCSS file will be saved in the scripts/figma-tokens directory
// 8. The SCSS file will be named figma-tokens.scss

import * as fs from 'fs';
import * as path from 'path';

// Path to the JSON file exported from Tokens Studio
// Since the script runs from project root with ts-node, we use relative paths
const jsonInputPath = path.join(process.cwd(), 'scripts/figma-tokens/tokens.json');
// Path to the output SCSS file
const scssOutputPath = path.join(process.cwd(), 'scripts/figma-tokens/figma-tokens.scss');

interface TokenValue {
  value: string;
  [key: string]: any; // Allows additional properties if needed
}

interface TokenGroup {
  [key: string]: TokenValue | TokenGroup;
}

interface Tokens {
  [key: string]: TokenGroup | any;
}

function convertTokensToScss(tokens: TokenGroup, prefix = ''): string {
  let scss = '';

  for (const [key, value] of Object.entries(tokens)) {
    const newPrefix = prefix ? `${prefix}-${key}` : key;

    if (value && typeof value === 'object' && 'value' in value) {
      // It's a leaf (a color variable)
      const tokenValue = (value as TokenValue).value;
      scss += `$${newPrefix}: ${tokenValue};\n`;
    } else if (value && typeof value === 'object') {
      // It's a group, we recurse
      scss += `\n// ${newPrefix}\n`;
      scss += convertTokensToScss(value as TokenGroup, newPrefix);
    }
  }

  return scss;
}

try {
  // Read the JSON file
  const rawData = fs.readFileSync(jsonInputPath, 'utf-8');
  const tokens: Tokens = JSON.parse(rawData);

  // Generate the SCSS content
  let scssContent = `// Automatically generated variables from Tokens Studio\n`;
  scssContent += `// Generated on: ${new Date().toISOString()}\n\n`;

  // Process all token groups, not just 'color'
  let hasTokens = false;
  for (const [groupKey, groupValue] of Object.entries(tokens)) {
    // Skip typography tokens that have complex nested values
    if (groupValue && typeof groupValue === 'object' && !('value' in groupValue)) {
      // Check if this is a simple token group (like fontFamilies, lineHeights, etc.)
      const firstChild = Object.values(groupValue)[0];
      if (firstChild && typeof firstChild === 'object' && 'value' in firstChild) {
        scssContent += `// ${groupKey}\n`;
        scssContent += convertTokensToScss(groupValue as TokenGroup, groupKey);
        scssContent += `\n`;
        hasTokens = true;
      }
    }
  }

  if (!hasTokens) {
    console.warn('Warning: No valid token groups found in the JSON file.');
    scssContent += `// No valid token groups found in the JSON file.\n`;
  }

  // Write the SCSS file
  fs.writeFileSync(scssOutputPath, scssContent);
  console.log(`SCSS file generated successfully: ${scssOutputPath}`);
} catch (error) {
  console.error('Error during conversion:', error);
  process.exit(1);
}
