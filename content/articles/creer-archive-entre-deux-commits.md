---
title: "Créer une archive entre deux commits"
img: "snippet"
article_type: "Snippet"
tags: ["Git"]
created_at: 2024-10-01
draft: false
---

::block-text
BLABLABLA
::


::block-code
```bash
git archive --output=<file> HEAD $(git diff --name-only commit1SHA commit2SHA)
```
::




