<template>
  <section class="content__code">
    <Shiki
      :lang="lang"
      :code="code" />
  </section>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  code: {
    type: String,
    required: true,
  },
  lang: {
    type: String,
    default: "php", // Langage par défaut ou passez-le en prop
  },
});
</script>
