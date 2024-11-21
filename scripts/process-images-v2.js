import sharp from "sharp";
import path from "path";
import fs from "fs";

const inputImage = "public/img/build/quentin_face.webp"; // Remplacez par le chemin de l'image source
const outputDir = "public/img/build/";

// Liste des tailles à générer
const sizes = [
  { width: 288, filename: "quentin_face_288w.webp" },
  { width: 396, filename: "quentin_face_396w.webp" },
  { width: 435, filename: "quentin_face_435w.webp" },
  { width: 572, filename: "quentin_face_572w.webp" },
  { width: 620, filename: "quentin_face_620w.webp" },
  { width: 660, filename: "quentin_face_660w.webp" },
  { width: 715, filename: "quentin_face_715w.webp" },
  { width: 836, filename: "quentin_face_836w.webp" },
];

// Créer le dossier de sortie s'il n'existe pas
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Générer les images
sizes.forEach(({ width, filename }) => {
  sharp(inputImage)
    .resize({ width })
    .webp()
    .toFile(path.join(outputDir, filename))
    .then(() => {
      console.log(`Image générée: ${filename}`);
    })
    .catch((err) => {
      console.error(`Erreur lors de la génération de ${filename}:`, err);
    });
});
