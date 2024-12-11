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
            <NuxtImg
              :src="'/img/articles/thumbnail/' + article.img + '_520x390.webp'"
              :alt="'Image illustrant l\'article ' + article.title"
              sizes="(max-width: 320px) 272px, 
            (max-width: 551px) 503px, 
            (max-width: 640px) 260px, 
            (max-width: 768px) 348px, 
            (max-width: 927px) 372px, 
            (max-width: 1024px) 358px, 
            (max-width: 1536px) 443px, 
            518px"
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

useHead({
  title: "Mes articles - Quentin Fonteneau",
});
</script>
