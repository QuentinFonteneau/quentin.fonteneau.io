<template>
  <section class="about">
    <div class="about__image shadow-top-left">
      <NuxtImg
        src="/img/build/quentin_dos.webp"
        sizes="xs:248px, sm:568px, md:698px, lg:431px, xl:572px, xxl:713px, 836px"
        quality="90"
        loading="lazy"
        alt="Quentin Fonteneau de dos avec un casque sur les oreilles" />
    </div>
    <div class="about__text">
      <div class="header">
        <h1>À propos</h1>
        <p class="subtitle">À propos de moi</p>
      </div>
      <p>
        Quand je ne suis pas derrière un écran à concevoir des solutions web
        performantes, je suis souvent en mouvement.
        <span class="highlight">Passionné de sport</span>, j’aime me dépasser en
        pratiquant le cyclisme, la course à pied ou encore du badminton.<br />
        En dehors du digital et de l’effort physique, je trouve aussi mon
        équilibre dans
        <span class="highlight">la construction et le bricolage</span>. J’ai un
        réel plaisir à concevoir des projets en bois !<br /><br />
        <span class="highlight">Curieux et rigoureux</span>, j’aime explorer et
        étudier de nouvelles solutions web pour rester à la pointe de mon
        métier. <span class="highlight">Ponctuel, sérieux et persévérant</span>,
        je m’investis pleinement dans tout ce que j’entreprends, que ce soit
        dans ma vie professionnelle ou personnelle.
      </p>
      <NuxtLink
        class="btn"
        to="/a-propos">
        En savoir plus
      </NuxtLink>
    </div>
  </section>
</template>
