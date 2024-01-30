<script lang="ts" setup>
const { slug } = useRoute().params;
import { BlocCode, BlocImage, BlocText, Button, ProjetIntro, Section } from '#components';

const components = {
    'bloc-text': BlocText,
    'bloc-code': BlocCode,
    'lien': Button,
    'bloc-image': BlocImage,
    'intro': ProjetIntro,
    'section': Section,
}
</script>

<template>
    <main>
        <ContentDoc :path="`/projets/${slug}`" v-slot="{ doc }">
            <ContentRenderer :value="doc">
                <ContentRendererMarkdown :value="doc" :components="components" />
            </ContentRenderer>
        </ContentDoc>
    </main>
</template>
