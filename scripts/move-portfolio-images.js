import { promises as fs } from 'fs';
import path from 'path';
import sharp from 'sharp';

const QUALITY = 80;
const SIZES = [320, 640, 768, 1024];

async function processImage(sourcePath, targetDir, filename) {
  try {
    // Create target directory if it doesn't exist
    await fs.mkdir(targetDir, { recursive: true });

    // Generate WebP versions in different sizes
    for (const width of SIZES) {
      const targetPath = path.join(targetDir, `${filename}-${width}.webp`);
      await sharp(sourcePath)
        .resize(width, null, {
          withoutEnlargement: true,
          fit: 'inside'
        })
        .webp({ quality: QUALITY })
        .toFile(targetPath);
      
      console.log(`✅ Generated ${width}px version for ${filename}`);
    }

    // Generate placeholder
    const placeholderPath = path.join(targetDir, `${filename}-placeholder.webp`);
    await sharp(sourcePath)
      .resize(20, null, {
        withoutEnlargement: true,
        fit: 'inside'
      })
      .blur(10)
      .webp({ quality: 20 })
      .toFile(placeholderPath);

    console.log(`✅ Generated placeholder for ${filename}`);
  } catch (error) {
    console.error(`❌ Error processing ${filename}:`, error);
  }
}

async function moveAndOptimizeImages() {
  const sourceDir = path.join(process.cwd(), 'src/assets/Portfolio');
  const targetDir = path.join(process.cwd(), 'public/images/portfolio');

  try {
    // Ensure target directory exists
    await fs.mkdir(targetDir, { recursive: true });

    // Read all categories
    const categories = await fs.readdir(sourceDir);

    for (const category of categories) {
      const categoryPath = path.join(sourceDir, category);
      const categoryStats = await fs.stat(categoryPath);

      if (categoryStats.isDirectory()) {
        // Read website directory
        const websitePath = path.join(categoryPath, 'Website');
        
        try {
          const files = await fs.readdir(websitePath);

          // Process each image
          for (const file of files) {
            if (file.toLowerCase().match(/\.(jpg|jpeg|png)$/i)) {
              const sourcePath = path.join(websitePath, file);
              const filename = path.parse(file).name;
              await processImage(sourcePath, targetDir, filename);
            }
          }
        } catch (error) {
          if (error.code === 'ENOENT') {
            console.log(`Skipping ${category} - No Website directory found`);
          } else {
            console.error(`Error processing ${category}:`, error);
          }
        }
      }
    }

    console.log('🎉 All portfolio images have been processed!');
  } catch (error) {
    console.error('Failed to process images:', error);
    process.exit(1);
  }
}

// Run the script
moveAndOptimizeImages(); 