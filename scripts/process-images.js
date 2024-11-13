import sharp from "sharp";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Définir __dirname et __filename en JavaScript
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const projectSourceDir = path.join(__dirname, "../public/img/projects/source");
const projectHeaderDir = path.join(__dirname, "../public/img/projects/header");
const projectThumbnailDir = path.join(
  __dirname,
  "../public/img/projects/thumbnail"
);
const projectContentDir = path.join(
  __dirname,
  "../public/img/projects/content"
);

const articleSourceDir = path.join(__dirname, "../public/img/articles/source");
const articleHeaderDir = path.join(__dirname, "../public/img/articles/header");
const articleThumbnailDir = path.join(
  __dirname,
  "../public/img/articles/thumbnail"
);
const articleContentDir = path.join(
  __dirname,
  "../public/img/articles/content"
);
// Créer les dossiers de sortie s'ils n'existent pas
[
  projectHeaderDir,
  projectThumbnailDir,
  articleHeaderDir,
  articleThumbnailDir,
].forEach((dir) => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
});

// Formats à générer pour le dossier projects/source
const projectFormats = [
  {
    width: 1600,
    height: 400,
    suffix: "_1600x400",
    outputDir: projectHeaderDir,
  },
  {
    width: 520,
    height: 390,
    suffix: "_520x390",
    outputDir: projectThumbnailDir,
  },
];
// Formats à générer pour le dossier articles/source
const articleFormats = [
  {
    width: 1600,
    height: 400,
    suffix: "_1600x400",
    outputDir: articleHeaderDir,
  },
  {
    width: 520,
    height: 390,
    suffix: "_520x390",
    outputDir: articleThumbnailDir,
  },
];

// Fonction pour traiter les images dans un dossier
const processImages = (inputDir, formats, resizeOnly = false) => {
  if (!fs.existsSync(inputDir)) {
    console.error(`Le dossier ${inputDir} n'existe pas.`);
    return;
  }

  const files = fs.readdirSync(inputDir);
  if (files.length === 0) {
    console.log(`Aucun fichier trouvé dans ${inputDir}.`);
    return;
  }

  files.forEach((file) => {
    const inputPath = path.join(inputDir, file);

    // Vérifie si le fichier est une image PNG, JPG ou JPEG
    if (/\.(jpg|jpeg|png)$/i.test(file)) {
      formats.forEach(({ width, suffix, outputDir }) => {
        const outputWebPFileName = file.replace(
          /(\.[\w\d_-]+)$/i,
          `${suffix ? suffix : ""}.webp`
        );
        const outputWebPPath = path.join(outputDir, outputWebPFileName);

        sharp(inputPath)
          .resize({
            width: width,
            fit: "inside", // Respecte le ratio sans croper
          })
          .toBuffer({ resolveWithObject: true })
          .then(({ data }) => {
            return sharp(data).webp({ quality: 80 }).toFile(outputWebPPath);
          })
          .catch((err) => {
            console.error(
              `Erreur lors du traitement de l'image ${file} dans ${inputDir}:`,
              err
            );
          });
      });
    } else {
      console.log(`Le fichier ${file} n'est pas une image valide.`);
    }
  });
};

// Traiter les images du dossier projects/source
processImages(projectSourceDir, projectFormats);

// Traiter les images du dossier content (projects) avec une limite de largeur de 1760px
processImages(
  projectContentDir,
  [{ width: 1760, suffix: "", outputDir: projectContentDir }],
  true
);

// Traiter les images du dossier articles/source
processImages(articleSourceDir, articleFormats);

// Traiter les images du dossier content (articles) avec une limite de largeur de 1760px
processImages(
  articleContentDir,
  [{ width: 1760, suffix: "", outputDir: articleContentDir }],
  true
);
