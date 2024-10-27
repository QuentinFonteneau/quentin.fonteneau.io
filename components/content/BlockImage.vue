<template>
  <section class="content__image">
    <img
      :src="src"
      :alt="alt" />
    <legend v-if="legend">{{ legend }}</legend>
  </section>
</template>
<script setup lang="ts">
import { defineProps } from "vue";

interface BlockImageProps {
  src: string;
  alt: string;
  legend: string;
}

const props = defineProps<BlockImageProps>();
</script>
