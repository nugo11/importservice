import fs from 'fs';
import path from 'path';

const images = {
  'hero-bg.jpg': 'https://i.ibb.co/HDt9W7zF/shutterstock-1822759466-scaled.jpg',
  'warehouse-interior.jpg': 'https://i.ibb.co/0p2WHsWv/shutterstock-1715582929-scaled.jpg',
  'wall-panels.jpg': 'https://i.ibb.co/gbbL6C7L/image.jpg',
  'roof-panels.jpg': 'https://i.ibb.co/Zzcgm3tw/image.jpg',
  'cold-doors.jpg': 'https://i.ibb.co/3ynjY1jc/image.jpg',
  'containers.jpg': 'https://i.ibb.co/xqWGTpgS/image.jpg',
  'warehouses.jpg': 'https://i.ibb.co/6RjCS9wD/image.jpg',
  'cold-storage.jpg': 'https://i.ibb.co/DgCRPnMp/image.jpg',
  'commercial.jpg': 'https://i.ibb.co/1Jpp2zhB/image.jpg',
  'mineral-wool-vs-pir.webp': 'https://i.ibb.co/0pGyDhTS/mineral-wool-vs-PIR.webp',
  'og-image.jpg': 'https://i.ibb.co/HDt9W7zF/shutterstock-1822759466-scaled.jpg'
};

const dir = path.resolve('public/images');
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true });
}

async function run() {
  for (const [name, url] of Object.entries(images)) {
    const dest = path.join(dir, name);
    try {
      console.log(`Downloading ${name} from ${url}...`);
      const res = await fetch(url, {
        headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' }
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const buffer = Buffer.from(await res.arrayBuffer());
      fs.writeFileSync(dest, buffer);
      console.log(`Saved ${name} (${buffer.length} bytes)`);
    } catch (err) {
      console.error(`Error downloading ${name}:`, err.message);
    }
  }
}

run();
