<template>
  <div class="step-item">
    <div class="step-item__title">
      {{ title }}
    </div>
    <div class="step-item__text"><slot /></div>
  </div>
</template>
<script setup lang="ts">
import { defineProps } from "vue";

interface BlockStepItemProps {
  title: string;
}

const props = defineProps<BlockStepItemProps>();
</script>
