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
        <p class="subtitle">Rebonjour</p>
      </div>
      <p>
        Moi c’est Quentin ! Je suis développeur et je travaille dans le digital
        depuis <span class="highlight">15 ans</span>.
        <br />
        <br />
        Maîtrisant les technologies
        <span class="highlight">front-end et back-end</span>, je suis à l'écoute
        de vos besoins et de vos exigences, et je suis toujours prêt à vous
        proposer des <span class="highlight">solutions adaptées</span> à votre
        projet.
        <br />
        <br />
        La suite, c’est juste en dessous !
      </p>
    </div>
  </section>
</template>
