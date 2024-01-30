<script lang="ts" setup>
useHead({
    title: "Mes articles - Quentin Fonteneau",
});
</script>
<template>
    <main>
        <h1>Mes articles</h1>

        <ContentList path="/articles" :query="{
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
                <p>Aucun article trouvé.</p>
            </template>
        </ContentList>
    </main>
</template>