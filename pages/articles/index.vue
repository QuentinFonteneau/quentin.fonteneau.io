<template>
  <main>
    <section class="articles">
      <div class="header">
        <h1>Mes articles</h1>
      </div>
      <div class="filters">
        <span>Filtrer par</span>
        <div>
          <select
            name="article_type"
            id="article_type"
            v-model="articleType"
            required>
            <option
              value=""
              disabled
              selected
              hidden>
              Type d'article
            </option>
            <option value="all">Tout</option>
            <option value="Article">Article</option>
            <option value="Snippet">Snippet</option>
          </select>
          <!-- <input
            type="text"
            value=""
            placeholder="Recherche par mot-clés" /> -->
        </div>
      </div>
      <div class="articles-list">
        <div
          v-for="article in filteredArticles"
          :key="article._path">
          <NuxtLink
            :to="article._path"
            class="card">
            <img
              :src="'/img/articles/thumbnail/' + article.img + '_520x390.webp'"
              loading="lazy" />
            <div class="tag">
              <span>{{ article.article_type }}</span>
            </div>
            <span class="link">{{ article.title }}</span>
          </NuxtLink>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
const articleType = ref("all");

const { data: allArticles } = await useAsyncData("all-articles", () =>
  queryContent("articles").find()
);

const filteredArticles = computed(() => {
  if (articleType.value === "all") {
    return allArticles.value;
  }
  return allArticles.value.filter(
    (article) => article.article_type === articleType.value
  );
});

definePageMeta({
  documentDriven: {
    page: false, // Keep page fetching enabled
  },
});
</script>
