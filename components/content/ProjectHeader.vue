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
      <div class="article__header-metadata">
        <div class="tag">
          <span>{{ post.project_type ?? "" }}</span>
        </div>
        <ul class="tags-list">
          <li
            v-for="skill in post.project_skills"
            :key="skill">
            {{ skill }}
          </li>
        </ul>
      </div>
      <div class="article__header-description">
        <h1 class="subtitle">{{ post.title ?? "" }}</h1>
        <slot />
        <a
          class="btn"
          :href="post.project_url"
          target="_blank">
          Consulter le site
        </a>
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
