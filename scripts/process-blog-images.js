import fs from 'fs';
import path from 'path';
import https from 'https';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BLOG_IMAGES = {
  'react-seo-cover': 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=1600', // React and SEO concept
  'local-seo-cover': 'https://images.unsplash.com/photo-1579373903781-fd5c0c30c4cd?w=1600', // Local business concept
  'content-marketing-cover': 'https://images.unsplash.com/photo-1542744094-24638eff58bb?w=1600', // Content marketing concept
  'brand-presence-cover': 'https://images.unsplash.com/photo-1557838923-2985c318be48?w=1600', // Brand building concept
  'ai-marketing-cover': 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1600', // AI marketing concept
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
  const baseDir = path.join(process.cwd(), 'public', 'images', 'blog');
  ensureDirectoryExists(baseDir);

  for (const [name, url] of Object.entries(BLOG_IMAGES)) {
    console.log(`Processing ${name}...`);
    
    const tempPath = path.join(baseDir, `${name}-temp.jpg`);
    const finalPath = path.join(baseDir, `${name}.webp`);
    
    try {
      await downloadImage(url, tempPath);
      await processImage(tempPath, finalPath, 1600);
      fs.unlinkSync(tempPath); // Clean up temp file
      console.log(`✓ Processed ${name}`);
    } catch (error) {
      console.error(`✗ Failed to process ${name}:`, error);
    }
  }
  
  console.log('All blog images processed!');
};

main().catch(console.error); 