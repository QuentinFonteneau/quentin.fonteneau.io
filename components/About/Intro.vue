<template>
  <section>
    <div>
      <ul class="breadcrumb">
        <li>À propos</li>
      </ul>
    </div>
  </section>
  <section class="presentation">
    <div class="presentation__image shadow-top-left">
      <NuxtImg
        src="/img/build/quentin_ariegeoise.webp"
        sizes="(max-width: 360px) 288px, (max-width: 551px) 480px, (max-width: 768px) 700px, (max-width: 927px) 380px, (max-width: 1024px) 435px, (max-width: 1536px) 715px, 836px"
        loading="eager"
        quality="90"
        alt="Quentin Fonteneau installé à son bureau" />
    </div>
    <div class="presentation__text">
      <div class="header">
        <p class="subtitle">Bonjour,</p>
      </div>
      <p>
        Si vous voulez en savoir plus sur moi, vous êtes au bon endroit !
        <br /><br />
        Après un <span class="highlight">DUT informatique</span> suivi d'une
        <span class="highlight">licence pro</span> j'ai commencé à travailler
        dans le domaine du
        <span class="highlight">développement web en 2012</span>. Vous trouverez
        le détail de mon parcours un peu plus bas ! <br /><br />
        <span class="highlight">Côté perso</span>, je ne vous cache pas que je
        passe beaucoup de temps sur le PC pour
        <span class="highlight"
          >suivre les dernières évolutions et tester des logiciels ou des
          solutions</span
        >
        qui pourraient m'être utile dans mon domaine.
        <br />
        Ceci dit, je ne passe pas non plus toute la journée derrière l'écran !
        Je pratique pas mal de sport (<span class="highlight"
          >badminton, course à pied, cyclisme sur route...</span
        >) et lorsque le beau temps arrive, je bricole dehors.
      </p>
    </div>
  </section>
</template>
