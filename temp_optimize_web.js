const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const dir = './public/assets/web';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.png'));

async function optimize() {
  console.log('Starting optimization of web images...');
  for (const file of files) {
    const filePath = path.join(dir, file);
    const tempPath = filePath + '.tmp.png';
    try {
      console.log(`Optimizing ${file}...`);
      
      // Resize to width 1600, preserving aspect ratio, and compress
      await sharp(filePath)
        .resize({ width: 1600 })
        .png({ quality: 80, compressionLevel: 8 })
        .toFile(tempPath);
        
      // Replace original file
      fs.unlinkSync(filePath);
      fs.renameSync(tempPath, filePath);
      
      const newSize = fs.statSync(filePath).size;
      console.log(`Successfully optimized ${file}. New size: ${(newSize / (1024 * 1024)).toFixed(2)} MB`);
    } catch (e) {
      console.error(`Error optimizing ${file}:`, e.message);
      if (fs.existsSync(tempPath)) {
        fs.unlinkSync(tempPath);
      }
    }
  }
  console.log('Web images optimization completed.');
}

optimize();
