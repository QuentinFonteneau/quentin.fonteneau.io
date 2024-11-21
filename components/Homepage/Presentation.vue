<template>
  <section class="presentation">
    <div class="presentation__text">
      <div class="header">
        <h1 class="typo-subtitle">Présentation</h1>
        <p class="subtitle">Bienvenue !</p>
      </div>
      <p>
        Je m'appelle Quentin, développeur passionné avec
        <span class="highlight">15 ans d'expérience</span> dans le domaine du
        digital. Maîtrisant les technologies front-end et back-end, je suis
        attentif à vos besoins et prêt à concevoir
        <span class="highlight">des solutions sur mesure</span> pour concrétiser
        vos projets.
        <br />
        <br />
        La suite, c’est juste en dessous !
      </p>
    </div>
    <div class="presentation__image shadow-bottom-right">
      <NuxtImg
        src="/img/build/quentin_face.webp"
        sizes="(max-width: 360px) 288px, (max-width: 551px) 480px, (max-width: 768px) 700px, (max-width: 927px) 380px, (max-width: 1024px) 435px, (max-width: 1536px) 715px, 836px"
        loading="eager"
        quality="90"
        width="836"
        alt="Quentin Fonteneau installé à son bureau" />
    </div>
  </section>
</template>
