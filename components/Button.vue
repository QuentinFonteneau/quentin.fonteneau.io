<script setup>
defineProps(['label', 'url', 'isExternal'])
</script>

<template>
  <a v-if="isExternal === 'true'" :href="`${url}`" target="_blank">
    <ContentSlot :use="$slots.default" unwrap="p" />{{ label }}
  </a>
  <a v-else :href="`${url}`">
    <ContentSlot :use="$slots.default" unwrap="p" />{{ label }}
  </a>
</template>