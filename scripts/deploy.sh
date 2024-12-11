#!/bin/bash

# Variables communes
LOCAL_BUILD_DIR=".output/public"
REMOTE_USER="root"

# Vérification du paramètre passé au script
if [ "$1" == "prod" ]; then
  REMOTE_HOST="89.117.50.91"
  REMOTE_DIR="/home/quentin/prod.quentin.fonteneau.io/quentin.fonteneau.io/"
elif [ "$1" == "preprod" ]; then
  REMOTE_HOST="89.117.50.91"
  REMOTE_DIR="/home/quentin/preprod.quentin.fonteneau.io/quentin.fonteneau.io/"
else
  echo "Usage: $0 [prod|preprod]"
  exit 1
fi

# Commande rsync pour déployer uniquement les différences
rsync -avz --delete --exclude=".htaccess" --exclude=".htpasswd" "$LOCAL_BUILD_DIR/" "$REMOTE_USER@$REMOTE_HOST:$REMOTE_DIR"

# Options expliquées :
# -a : archive mode, pour préserver les permissions, liens, etc.
# -v : verbose, pour afficher les détails
# -z : compression pendant le transfert
# --delete : supprime les fichiers du côté distant qui n'existent plus localement
# --exclude=".htaccess" : exclut le fichier .htaccess de la suppression
# --exclude=".htpasswd" : exclut le fichier .htpasswd de la suppression

echo "Déploiement terminé sur l'environnement $1 !"
