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
          <img
            :src="'/img/' + projet.img"
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
        href="/projets">
        Découvrir mes projets
      </NuxtLink>
    </div>
  </section>
</template>

<script setup>
const { data: projets, refresh } = await useAsyncData("projets", () => {
  const query = queryContent("projets");
  query.limit(3);
  query.sort();
  return query.find();
});
</script>
