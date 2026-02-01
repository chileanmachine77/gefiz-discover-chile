import sharp from 'sharp';
import { promises as fs } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const sizes = [16, 32, 48, 64, 96, 128, 192, 256, 384, 512];
const outputDir = join(__dirname, '../public/favicons');
const inputFile = join(__dirname, '../public/favicon-square.svg');

async function generateFavicons() {
  try {
    // Create output directory if it doesn't exist
    await fs.mkdir(outputDir, { recursive: true });
    
    // Generate PNG and WebP versions
    for (const size of sizes) {
      const pngPath = join(outputDir, `favicon-${size}x${size}.png`);
      const webpPath = join(outputDir, `favicon-${size}x${size}.webp`);
      
      // Generate PNG
      await sharp(inputFile)
        .resize(size, size)
        .png()
        .toFile(pngPath);
      
      // Generate WebP
      await sharp(inputFile)
        .resize(size, size)
        .webp()
        .toFile(webpPath);
      
      console.log(`Generated: ${pngPath}`);
      console.log(`Generated: ${webpPath}`);
    }
    
    // Generate ICO file (using 16, 32, 48, 64, 128, 256)
    await sharp(inputFile)
      .resize(48, 48)  // 48x48 is the standard size for ICO
      .toFile(join(outputDir, 'favicon.ico'));
    
    // Generate Apple touch icon (180x180 is required for iOS)
    await sharp(inputFile)
      .resize(180, 180)
      .png()
      .toFile(join(outputDir, 'apple-touch-icon.png'));
    
    console.log('Favicon generation complete!');
  } catch (error) {
    console.error('Error generating favicons:', error);
    process.exit(1);
  }
}

generateFavicons();
