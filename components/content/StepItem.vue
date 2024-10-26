<template>
  <div class="step-item">
    <div class="step-item__title">
      <ContentSlot
        :use="$slots.title"
        unwrap="p" />
    </div>
    <div class="step-item__text"><slot name="text" /></div>
  </div>
</template>
