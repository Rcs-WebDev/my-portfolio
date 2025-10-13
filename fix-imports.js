import fs from "fs";
import path from "path";

// fungsi untuk cari file rekursif
function getAllFiles(dir, ext, files = []) {
  fs.readdirSync(dir).forEach(file => {
    const filepath = path.join(dir, file);
    if (fs.statSync(filepath).isDirectory()) {
      getAllFiles(filepath, ext, files);
    } else if (filepath.endsWith(ext)) {
      files.push(filepath);
    }
  });
  return files;
}

// regex untuk hapus versi (contoh: next-themes@0.4.6 -> next-themes)
const versionRegex = /(["'])([^"']+?)@\d+\.\d+\.\d+(["'])/g;

function fixImports() {
  const exts = [".ts", ".tsx"];
  exts.forEach(ext => {
    const files = getAllFiles("./src", ext);
    files.forEach(file => {
      let content = fs.readFileSync(file, "utf8");
      if (versionRegex.test(content)) {
        const fixed = content.replace(versionRegex, "$1$2$3");
        fs.writeFileSync(file, fixed, "utf8");
        console.log(`✅ Fixed imports in: ${file}`);
      }
    });
  });
}

fixImports();
