<script lang="ts" setup>
useHead({
    title: "Mes projets - Quentin Fonteneau",
});
</script>
<template>
    <main>
        <h1>Mes projets</h1>

        <ContentList path="/projets" :query="{
            draft: false,
            sort: [
                {
                    date: -1,
                },
            ],
        }">
            <template #default="{ list }">
                <div v-for="projet in list" :key="projet._path">
                    {{projet.test}}
                    <NuxtLink :to="projet._path">
                        <h2>{{ projet.title }}</h2>
                    </NuxtLink>

                    <p>{{ projet.description }}</p>
                </div>
            </template>
            <template #not-found>
                <p>Aucun projet trouvé.</p>
            </template>
        </ContentList>
    </main>
</template>