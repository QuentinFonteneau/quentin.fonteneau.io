<template>
  <section class="content__youtube">
    <iframe
      width="100%"
      height="100%"
      :src="`https://www.youtube.com/embed/${id}`"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerpolicy="strict-origin-when-cross-origin"
      allowFullScreen></iframe>
  </section>
</template>
<script setup lang="ts">
import { defineProps } from "vue";

interface BlockYoutubeProps {
  id: string;
}

const props = defineProps<BlockYoutubeProps>();
</script>
