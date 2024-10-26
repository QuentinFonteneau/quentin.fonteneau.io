<template>
  <section class="article__header">
    <div>
      <ul class="breadcrumb">
        <li><a href="/projets">Mes projets</a></li>
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
        <span class="metadata__date"> Publié le 28 décembre 2023 </span>
        <span class="metadata__reading-time"> 7 min de temps de lecture </span>
      </div>
    </div>
  </section>
</template>
<script setup>
import { useRoute } from "vue-router";

const route = useRoute();
const post = await queryContent().where({ _path: route.fullPath }).findOne();

const img_header = "/img/" + post.img;
</script>
