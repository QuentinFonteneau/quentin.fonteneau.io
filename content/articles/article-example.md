---
title: "Snippet 2"
img: "snippet.webp"
article_type: "snippet"
tags: ["Drupal"]
created_at: 2024-10-24
draft: false
---


::block-text
---
title: Titre du bloc texte
---
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eget nunc
dictum, efficitur augue eu, consequat felis. Pellentesque consectetur erat a
lorem lacinia imperdiet.
::

::block-title
Ceci est un titre !
::

::block-youtube
---
id: DLmCObenYtQ
---
::


::block-text
---
title: Titre du bloc texte
---
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eget nunc
dictum, efficitur augue eu, consequat felis. Pellentesque consectetur erat a
lorem lacinia imperdiet.
::


::block-code
```typescript 
  export default function Text(props: any) {
      return (
          <>
              <section class="content__text">
                  <div>
                      { props.title && <h3>{props.title}</h3>}
                      {props.children}
                  </div>
              </section>
          </>
      );
  }
```
::

::block-text
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eget nunc
dictum, efficitur augue eu, consequat felis. Pellentesque consectetur erat a
lorem lacinia imperdiet.
::

::block-image
---
src: /img/aeroport_de_nantes.webp
alt: Photo de la facade de l'aéroport de Nantes Atlantique
legend: Ceci est une légende !
---
::