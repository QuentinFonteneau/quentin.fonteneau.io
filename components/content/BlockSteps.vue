<template>
  <section class="content__steps">
    <div class="steps">
      <h3 v-if="title">{{ title }}</h3>
      <div class="step-items">
        <slot />
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import { defineProps } from "vue";

interface BlockStepsProps {
  title: string;
}

const props = defineProps<BlockStepsProps>();
</script>
