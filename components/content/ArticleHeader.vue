<template>
  <section class="article__header">
    <div>
      <ul class="breadcrumb">
        <li><NuxtLink to="/articles">Mes articles</NuxtLink></li>
        <li>{{ post.title ?? "" }}</li>
      </ul>
      <div class="article_header_image shadow-top-left">
        <img :src="img_header" />
      </div>
    </div>

    <div class="article__header-presentation">
      <h1 class="subtitle">{{ post.title ?? "" }}</h1>
      <div class="tag">
        <span>{{ post.tags[0] ?? "" }}</span>
      </div>
      <div class="article__header-metadata">
        <span class="metadata__author"> Écrit par Quentin Fonteneau </span>
        <span class="metadata__date">
          Publié le {{ formatDate(post.created_at) }}
        </span>
        <span class="metadata__reading-time">
          {{ readingTime }} min de temps de lecture
        </span>
      </div>
    </div>
  </section>
</template>
<script setup>
import { useRoute } from "vue-router";

const route = useRoute();
const post = await queryContent(route.fullPath).findOne();
const readingTime = post.readingTime.minutes < 1 ? 1 : post.readingTime.minutes;
const img_header = "/img/articles/header/" + post.img + "_1600x400.webp";

function formatDate(dateString) {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(date);
}
</script>
