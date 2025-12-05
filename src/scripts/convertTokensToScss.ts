// convertTokensToScss.ts
// This script converts a JSON file exported from Tokens Studio (Figma) to a SCSS file.
import * as fs from 'fs';
import * as path from 'path';

// Path to the JSON file exported from Tokens Studio
const jsonInputPath = path.join(__dirname, '../scripts/figma-tokens/tokens.json');
// Path to the output SCSS file
const scssOutputPath = path.join(__dirname, '../scripts//figma-tokens/figma-tokens.scss');

interface TokenValue {
  value: string;
  [key: string]: any; // Allows additional properties if needed
}

interface TokenGroup {
  [key: string]: TokenValue | TokenGroup;
}

interface Tokens {
  color?: TokenGroup; // Optional to avoid runtime errors if 'color' is missing
  [key: string]: any;
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
  let scssContent = `// Automatically generated variables from Tokens Studio\n\n`;

  if (tokens.color) {
    // Generate SCSS variables only if 'color' exists
    scssContent += convertTokensToScss(tokens.color, 'color');
  } else {
    console.warn("Warning: No 'color' group found in the JSON file.");
    scssContent += `// No 'color' group found in the JSON file.\n`;
  }

  // Write the SCSS file
  fs.writeFileSync(scssOutputPath, scssContent);
  console.log(`SCSS file generated successfully: ${scssOutputPath}`);
} catch (error) {
  console.error('Error during conversion:', error);
  process.exit(1);
}
