#!/bin/bash

# Chemin vers le dossier contenant les images PNG
dossier_images="$(pwd)/public/img/projects/thumbnail"

# Vérifier si cwebp est installé
if ! command -v cwebp &> /dev/null; then
    echo "cwebp n'est pas installé. Installez-le en exécutant : sudo apt install webp"
    exit 1
fi

# Parcourir toutes les images PNG du dossier
for fichier in "$dossier_images"/*.png; do
echo "$fichier"
    if [[ -f "$fichier" ]]; then
        # Obtenir le nom de base sans extension
        nom_base=$(basename "$fichier" .png)
        # Convertir en WebP sans perte de qualité
        cwebp -lossless "$fichier" -o "$dossier_images/$nom_base.webp"
        echo "Image $fichier convertie en $nom_base.webp"
    fi
done

echo "Conversion terminée !"
