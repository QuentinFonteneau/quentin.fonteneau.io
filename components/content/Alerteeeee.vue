<!-- components/Alert.vue -->
<template>
  <div
    class="alert"
    :class="`alert-${type}`">
    <slot />
  </div>
</template>

<script setup>
defineProps({
  type: {
    type: String,
    default: "info",
  },
});
</script>

<style scoped>
.alert {
  padding: 15px;
  border-radius: 4px;
}
.alert-info {
  background-color: #d9edf7;
  color: #31708f;
}
.alert-warning {
  background-color: #fcf8e3;
  color: #8a6d3b;
}
</style>
