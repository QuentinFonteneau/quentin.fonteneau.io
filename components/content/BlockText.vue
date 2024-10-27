<template>
  <section class="content__text">
    <div>
      <h3 v-if="title">{{ title }}</h3>
      <slot />
    </div>
  </section>
</template>
<script setup lang="ts">
import { defineProps } from "vue";

interface BlockTextProps {
  title?: string;
}

const props = defineProps<BlockTextProps>();
</script>
