const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const dir = path.join(__dirname, '..', 'public', 'images');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.jpg') || f.endsWith('.png'));

async function optimize() {
  for (const file of files) {
    const filePath = path.join(dir, file);
    const tempPath = path.join(dir, 'tmp_' + file);
    const statBefore = fs.statSync(filePath);

    try {
      await sharp(filePath)
        .resize({ width: 1200, withoutEnlargement: true })
        .jpeg({ quality: 82, progressive: true, mozjpeg: true })
        .toFile(tempPath);

      const statAfter = fs.statSync(tempPath);
      if (statAfter.size < statBefore.size) {
        fs.unlinkSync(filePath);
        fs.renameSync(tempPath, filePath);
        console.log(`Optimized ${file}: ${Math.round(statBefore.size/1024)}KB -> ${Math.round(statAfter.size/1024)}KB`);
      } else {
        fs.unlinkSync(tempPath);
        console.log(`Kept original ${file}: ${Math.round(statBefore.size/1024)}KB`);
      }
    } catch (err) {
      if (fs.existsSync(tempPath)) fs.unlinkSync(tempPath);
      console.error(`Error on ${file}:`, err.message);
    }
  }
}

optimize();
