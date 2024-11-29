<template>
  <section class="listing">
    <div class="header">
      <h1>Mes projets</h1>
      <p class="subtitle">On a travaillé ensemble</p>
    </div>
    <div class="card-list">
      <div
        v-for="projet in projets"
        :key="projet._path">
        <NuxtLink
          :to="projet._path"
          class="card">
          <NuxtImg
            :src="'/img/projects/thumbnail/' + projet.img + '_688x516.webp'"
            :alt="'Image illustrant le projet ' + projet.title"
            quality="90"
            loading="lazy" />
          <div class="tag">
            <span>En agence</span>
          </div>
          <span class="link">{{ projet.title }}</span>
        </NuxtLink>
      </div>
    </div>
    <div class="card-cta">
      <NuxtLink
        class="btn"
        to="/projets">
        Découvrir mes projets
      </NuxtLink>
    </div>
  </section>
</template>

<script setup>
const { data: projets, refresh } = await useAsyncData("projets", () => {
  const query = queryContent("projets");
  query.limit(3);
  query.sort({ created_at: -1 });
  return query.find();
});
</script>
