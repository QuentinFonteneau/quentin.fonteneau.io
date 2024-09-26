<!-- components/Button.vue -->
<template>
  <button class="btn">{{ label }}</button>
</template>

<script setup>
  defineProps({
    label: {
      type: String,
      required: true,
    },
  });
</script>

<style scoped>
  .btn {
    background-color: #007bff;
    color: white;
    padding: 10px;
    border-radius: 5px;
  }
</style>
