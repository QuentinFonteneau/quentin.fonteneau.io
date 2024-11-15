<template>
  <section class="presentation">
    <div class="presentation__text">
      <div class="header">
        <h1 class="typo-subtitle">Présentation</h1>
        <p class="subtitle">Bienvenue !</p>
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
    <div class="presentation__image shadow-bottom-right">
      <NuxtImg
        src="/img/build/quentin_face.png"
        sizes="(max-width: 320px) 272px, (max-width: 551px) 503px, (max-width: 927px) 372px, (max-width: 1024px) 358px, (max-width: 1536px) 443px, 518px"
        loading="lazy"
        format="webp"
        quality="90"
        alt="Quentin Fonteneau installé à son bureau" />
      <NuxtImg
        src="/img/build/quentin_01.webp"
        sizes="100vw sm:5vw md:400px"
        loading="lazy"
        format="webp"
        quality="90"
        alt="Quentin Fonteneau installé à son bureau" />
    </div>
  </section>
</template>
