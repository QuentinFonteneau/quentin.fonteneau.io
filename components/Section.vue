<script setup>
defineProps(['className'])
</script>

<template>
    <section :class="`${className}`">
        <ContentSlot :use="$slots.default"/>
    </section>
</template>