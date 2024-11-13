<template>
  <section class="article__header">
    <div>
      <ul class="breadcrumb">
        <li><a href="/projets">Mes projets</a></li>
        <li>{{ post.title ?? "" }}</li>
      </ul>
      <div class="article_header_image shadow-top-left">
        <picture>
          <!-- Image large pour les grands écrans -->
          <source
            :srcset="'/img/projects/header/' + post.img + '_1600x400.webp'"
            media="(min-width: 1200px)"
            type="image/png" />

          <!-- Image moyenne pour les écrans de taille moyenne -->
          <source
            :srcset="'/img/projects/header/' + post.img + '_1600x400.webp'"
            media="(min-width: 768px)"
            type="image/png" />

          <!-- Image petite pour les petits écrans -->
          <source
            :srcset="'/img/projects/header/' + post.img + '_1600x400.webp'"
            media="(max-width: 767px)"
            type="image/png" />

          <img
            src=""
            loading="lazy" />
        </picture>
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
          v-if="post.project_url"
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
</script>
