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
            :src="'/img/projects/thumbnail/' + projet.img + '_520x390.png'"
            :alt="'Image illustrant le projet ' + projet.title"
            sizes="xs:248px, sm:568px, md:698px, lg:431px, xl:572px, xxl:713px"
            format="webp"
            quality="90"
            loading="lazy" />

          <!--   sizes="(max-width: 320px) 272px, (max-width: 551px) 503px, (max-width: 640px) 260px, (max-width: 768px) 348px, (max-width: 927px) 372px, (max-width: 1024px) 358px, (max-width: 1536px) 443px, 518px" -->
          <!-- <NuxtImg
            :src="'/img/projects/thumbnail/' + projet.img + '_520x390.png'"
            :alt="'Image illustrant le projet ' + projet.title"
            sizes="(max-width: 600px) 100px, (max-width: 1024px) 200px, (max-width: 1440px) 300px, 400px"
            format="webp"
            quality="90"
            loading="lazy" /> -->
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
