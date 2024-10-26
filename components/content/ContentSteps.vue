<template>
  <section class="content__steps">
    <div class="steps">
      <h3>{{ title }}</h3>
      <div class="step-items">
        <slot />
      </div>
    </div>
  </section>
</template>
<script setup>
defineProps(["title"]);
</script>
