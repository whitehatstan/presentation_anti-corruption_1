const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const imagesDir = path.join(__dirname, '../src/images');
const backupDir = path.join(__dirname, '../src/images_backup');

if (!fs.existsSync(backupDir)) fs.mkdirSync(backupDir);

const files = fs.readdirSync(imagesDir).filter(f => /\.(jpe?g|png|webp)$/i.test(f));

(async () => {
  for (const file of files) {
    const full = path.join(imagesDir, file);
    const backup = path.join(backupDir, file);
    if (!fs.existsSync(backup)) fs.copyFileSync(full, backup);

    const ext = path.extname(file).toLowerCase();
    const out = full; // overwrite

    try {
      const image = sharp(full);
      const metadata = await image.metadata();

      const maxWidth = 1200;
      const width = metadata.width && metadata.width > maxWidth ? maxWidth : metadata.width;

      if (ext === '.webp') {
        await image.resize(width).webp({quality: 80}).toFile(out + '.tmp');
      } else if (ext === '.png') {
        await image.resize(width).png({quality: 80, compressionLevel: 8}).toFile(out + '.tmp');
      } else {
        await image.resize(width).jpeg({quality: 80}).toFile(out + '.tmp');
      }

      fs.renameSync(out + '.tmp', out);
      console.log(`Compressed ${file}`);
    } catch (err) {
      console.error(`Failed ${file}:`, err.message);
    }
  }
})();
