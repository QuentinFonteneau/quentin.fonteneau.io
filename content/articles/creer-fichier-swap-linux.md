---
title: "Créer un fichier swap sous Linux"
img: "snippet"
article_type: "Snippet"
tags: ["Linux"]
created_at: 2024-10-20
draft: false
---

::block-text
BLABLABLA
::


::block-code
```bash 
#!/bin/bash

if [ $# -eq 1 ]; then
    re='^[1-9]$'

    if [[ $1 =~ $re ]]; then
        filename=$1_$(date +%Y%m%d-%H%M%S)
        cd /mnt/
        dd if=/dev/zero of=$filename.swap bs=1k count=4096000
        chmod 600  /mnt/$filename.swap
        chown $USER: /mnt/$filename.swap
        mkswap $filename.swap -f
        swapon /mnt/$filename.swap
    else 
        echo "Veuillez passer comme paramètre un chiffre entre 1 et 9."
    fi
else 
    echo "Veuillez passer comme paramètre la taille du swap souhaitée (entre 1 et 9 Go)."
fi
```
::
