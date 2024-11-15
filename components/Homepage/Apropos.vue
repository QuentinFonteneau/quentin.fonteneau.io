<template>
  <section class="about">
    <div class="about__image shadow-top-left">
      <NuxtImg
        src="/img/build/quentin_dos.png"
        sizes="xs:248px, sm:568px, md:698px, lg:431px, xl:572px, xxl:713px, 836px"
        loading="lazy"
        alt="Quentin Fonteneau de dos avec un casque sur les oreilles" />
    </div>
    <div class="about__text">
      <div class="header">
        <h1>À propos</h1>
        <p class="subtitle">À propos de moi</p>
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
      </p>
      <NuxtLink
        class="btn"
        to="/a-propos">
        En savoir plus
      </NuxtLink>
    </div>
  </section>
</template>
