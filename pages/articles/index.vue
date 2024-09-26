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
            <option value="snippet">Snippet</option>
          </select>
          <!-- <input
            type="text"
            value=""
            placeholder="Recherche par mot-clés" /> -->
        </div>
      </div>
      <div class="articles-list">
        <div
          v-for="article in articles"
          :key="article._path">
          <NuxtLink
            :to="article._path"
            class="card">
            <img
              :src="'/img/' + article.img"
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

const { data: articles, refresh } = await useAsyncData("articles", () => {
  const query = queryContent("articles");
  if (articleType.value !== "all") {
    // Applique le filtre seulement si ce n'est pas "all"
    query.where(
      articleType.value !== "all" ? { article_type: articleType.value } : {}
    );
  }
  return query.find();
});

watchEffect(() => {
  refresh(); // Rafraîchir la requête dès que la catégorie change
});

definePageMeta({
  documentDriven: {
    page: false, // Keep page fetching enabled
  },
});
</script>
