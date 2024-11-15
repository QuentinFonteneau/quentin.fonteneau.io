<template>
  <main class="project">
    <ContentDoc
      tag="article"
      :document="document" />
  </main>
</template>
<script setup>
const route = useRoute();
const path = route.path; // Utiliser le path complet pour récupérer le bon document

// Utiliser queryContent pour récupérer le contenu
const { data: document } = useAsyncData("document", () =>
  queryContent(path).findOne()
);

// Définir le titre SEO en utilisant la valeur récupérée
useHead({
  title: `${document.value?.title || "Titre projet"} - Quentin Fonteneau`,
});
</script>
