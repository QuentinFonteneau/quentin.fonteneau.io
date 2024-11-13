#!/bin/bash

# Variables
LOCAL_BUILD_DIR=".output/public"
REMOTE_USER="root"
REMOTE_HOST="89.117.50.91"
REMOTE_DIR="/home/quentin/new.quentin.fonteneau.io/quentin.fonteneau.io/"

# Commande rsync pour déployer uniquement les différences
rsync -avz --delete --exclude=".htaccess" --exclude=".htpasswd" "$LOCAL_BUILD_DIR/" "$REMOTE_USER@$REMOTE_HOST:$REMOTE_DIR"

# Options expliquées :
# -a : archive mode, pour préserver les permissions, liens, etc.
# -v : verbose, pour afficher les détails
# -z : compression pendant le transfert
# --delete : supprime les fichiers du côté distant qui n'existent plus localement
# --exclude=".htaccess" : exclut le fichier .htaccess de la suppression
# --exclude=".htpasswd" : exclut le fichier .htpasswd de la suppression

echo "Déploiement terminé !"
