<template>
  <section class="listing">
    <div class="header">
      <h1>Mes articles</h1>
      <p class="subtitle">Quelques articles</p>
    </div>
    <div class="card-list">
      <div
        v-for="article in articles"
        :key="article._path">
        <NuxtLink
          :to="article._path"
          class="card">
          <NuxtImg
            :src="'/img/articles/thumbnail/' + article.img + '_520x390.webp'" />
          <div class="tag">
            <span>{{ article.article_type }}</span>
          </div>
          <span class="link">{{ article.title }}</span>
        </NuxtLink>
      </div>
    </div>
    <div class="card-cta">
      <NuxtLink
        class="btn"
        href="/articles">
        Consulter mes articles
      </NuxtLink>
    </div>
  </section>
</template>

<script setup>
const { data: articles, refresh } = await useAsyncData("articles", () => {
  const query = queryContent("articles");
  query.limit(3);
  query.sort({ created_at: -1 });
  return query.find();
});
</script>
