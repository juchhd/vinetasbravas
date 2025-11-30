import fs from 'fs';
import path from 'path';

const folder = './paginas';

const files = fs.readdirSync(folder)
  .filter(file => /\.(png|jpg|jpeg|webp)$/i.test(file))
  .sort((a, b) => {
    const na = parseInt(a.match(/\d+/));
    const nb = parseInt(b.match(/\d+/));
    return na - nb;
  });

const pages = files.map((file, index) => {
  return {
    id: index + 1,
    image: `paginas/${file}`
  };
});

fs.writeFileSync('pages.json', JSON.stringify(pages, null, 2));

console.log("✅ pages.json generado con", pages.length, "páginas");