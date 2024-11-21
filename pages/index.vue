<template>
  <main class="home">
    <HomepagePresentation />
    <HomepageProjets />
    <HomepageMethodologie />
    <HomepageCompetences />
    <HomepageApropos />
  </main>
</template>
<script setup>
useHead({
  title: "Quentin Fonteneau - Développeur freelance",
  meta: [
    {
      name: "description",
      content:
        "Développeur depuis plus de 15 ans, je suis disponible pour vous apporter une solution adaptée à votre problème.",
    },
  ],
});
</script>
