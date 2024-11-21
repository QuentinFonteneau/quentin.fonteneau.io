<template>
  <main class="about">
    <article>
      <AboutIntro />
      <!-- <AboutHobbies /> -->
      <AboutBackground />
      <AboutCallToContact />
      <AboutNextChallenges />
    </article>
  </main>
</template>
<script setup>
useHead({
  title: "À propos - Quentin Fonteneau",
  meta: [
    {
      name: "description",
      content:
        "Découvrez mon parcours de développeur freelance passionné, mes hobbies et mes défis à venir. Plongez dans mon univers et ma vision du développement web.",
    },
  ],
});
</script>

//
