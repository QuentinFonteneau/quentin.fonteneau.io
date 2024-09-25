<script setup>
defineProps(['language'])
</script>

<template>
    <pre :class="[language]">
        <ContentSlot :use="$slots.default" unwrap="p"/>
    </pre>
</template>