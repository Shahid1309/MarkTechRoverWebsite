import sharp from 'sharp';
import { glob } from 'glob';
import path from 'path';
import { promises as fs } from 'fs';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const SIZES = [320, 640, 768, 1024, 1280, 1536];
const QUALITY = 80;

async function optimizeImage(inputPath) {
  const ext = path.extname(inputPath);
  const dir = path.dirname(inputPath);
  const name = path.basename(inputPath, ext);
  
  try {
    // Convert to WebP
    await sharp(inputPath)
      .webp({ quality: QUALITY })
      .toFile(path.join(dir, `${name}.webp`));

    // Generate responsive sizes
    for (const width of SIZES) {
      await sharp(inputPath)
        .resize(width, null, {
          withoutEnlargement: true,
          fit: 'inside'
        })
        .webp({ quality: QUALITY })
        .toFile(path.join(dir, `${name}-${width}.webp`));
    }

    // Create blur placeholder
    await sharp(inputPath)
      .resize(20, null, {
        withoutEnlargement: true,
        fit: 'inside'
      })
      .blur(10)
      .webp({ quality: 20 })
      .toFile(path.join(dir, `${name}-placeholder.webp`));

    console.log(`✅ Optimized: ${inputPath}`);
  } catch (error) {
    console.error(`❌ Error optimizing ${inputPath}:`, error);
  }
}

async function main() {
  try {
    // Find all images
    const images = await glob('public/images/**/*.{jpg,jpeg,png}');
    
    // Process all images
    await Promise.all(images.map(optimizeImage));
    
    console.log('🎉 All images have been optimized!');
  } catch (error) {
    console.error('Failed to optimize images:', error);
    process.exit(1);
  }
}

main(); 