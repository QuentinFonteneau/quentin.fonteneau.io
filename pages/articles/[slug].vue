<script lang="ts" setup>
const { slug } = useRoute().params;
import { BlocText } from '#components';
import { BlocCode } from '#components';

const components = {
    'bloc-text': BlocText,
    'bloc-code': BlocCode
}
</script>

<template>
    <main>
        {{  }}
        <ContentDoc :path="`/articles/${slug}`" v-slot="{ doc }">
            {{ doc.thumbnail }}
            <img :src="doc.thumbnail" />
            <ContentRenderer :value="doc">
                <ContentRendererMarkdown :value="doc" :components="components" />
            </ContentRenderer>
        </ContentDoc>
    </main>
</template>
