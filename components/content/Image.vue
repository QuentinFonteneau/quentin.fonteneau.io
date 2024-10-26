<template>
  <section class="content__image">
    <img
      :src="imgSrc"
      :alt="imgAlt" />
    <legend v-if="$slots.legend"><slot name="legend" /></legend>
  </section>
</template>

<script setup>
import { computed } from "vue";

// Récupère le contenu des slots "src" et "alt" s'ils sont fournis
const imgSrc = computed(() => ($slots.src ? $slots.src()[0]?.children : ""));
const imgAlt = computed(() => ($slots.alt ? $slots.alt()[0]?.children : ""));
</script>
