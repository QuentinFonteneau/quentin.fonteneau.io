<template>
  <section class="content__blockquote">
    <blockquote>
      <slot />
      <span>
        {{ author }}
        <cite>
          {{ role }}
        </cite>
      </span>
    </blockquote>
  </section>
</template>
<script setup lang="ts">
import { defineProps } from "vue";

interface BlockTestimonyProps {
  author: string;
  role: string;
}

const props = defineProps<BlockTestimonyProps>();
</script>
