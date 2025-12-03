import fs from 'fs';
import path from 'path';
import https from 'https';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const CASE_STUDIES = {
  idesign: {
    hero: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1600', // interior design workspace
    challenge: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800', // slow website concept
    solution: 'https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?w=800', // modern interior design
    results: 'https://images.unsplash.com/photo-1590402494682-cd3fb53b1f70?w=800' // analytics dashboard
  },
  dentinics: {
    hero: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1600', // modern dental clinic
    challenge: 'https://images.unsplash.com/photo-1600869009498-8d429f88d4f5?w=800', // dental equipment
    solution: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800', // dental consultation
    results: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800' // dental results
  },
  chumbak: {
    hero: 'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=1600', // colorful products
    challenge: 'https://images.unsplash.com/photo-1555529771-122e5d9f2341?w=800', // e-commerce challenge
    solution: 'https://images.unsplash.com/photo-1607082349566-187342175e2f?w=800', // modern e-commerce
    results: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800' // success metrics
  }
};

const downloadImage = (url, filepath) => {
  return new Promise((resolve, reject) => {
    https.get(url, (response) => {
      if (response.statusCode === 200) {
        const writeStream = fs.createWriteStream(filepath);
        response.pipe(writeStream);
        writeStream.on('finish', () => {
          writeStream.close();
          resolve();
        });
      } else {
        reject(new Error(`Failed to download image: ${response.statusCode}`));
      }
    }).on('error', reject);
  });
};

const processImage = async (inputPath, outputPath, width) => {
  await sharp(inputPath)
    .resize(width, null, { fit: 'cover' })
    .toFormat('webp')
    .toFile(outputPath);
};

const ensureDirectoryExists = (dirPath) => {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
};

const main = async () => {
  const baseDir = path.join(process.cwd(), 'public', 'images', 'case-studies');
  ensureDirectoryExists(baseDir);

  for (const [study, images] of Object.entries(CASE_STUDIES)) {
    console.log(`Processing images for ${study}...`);
    
    for (const [type, url] of Object.entries(images)) {
      const tempPath = path.join(baseDir, `${study}-${type}-temp.jpg`);
      const finalPath = path.join(baseDir, `${study}-${type}.webp`);
      
      try {
        await downloadImage(url, tempPath);
        await processImage(
          tempPath,
          finalPath,
          type === 'hero' ? 1600 : 800
        );
        fs.unlinkSync(tempPath); // Clean up temp file
        console.log(`✓ Processed ${study}-${type}`);
      } catch (error) {
        console.error(`✗ Failed to process ${study}-${type}:`, error);
      }
    }
  }
  
  console.log('All images processed!');
};

main().catch(console.error); 