---
title: "Générer un hashsalt avec Drush"
img: "snippet"
article_type: "Snippet"
tags: ["Drupal"]
created_at: 2024-11-05
draft: false
---

::block-text
Sous Linux, lorsqu'on a installé notre système d'exploitation en oubliant de créer la partition swap
::


::block-code
```bash
vendor/bin/drush eval "var_dump(Drupal\Component\Utility\Crypt::randomBytesBase64(55))"
```
::
