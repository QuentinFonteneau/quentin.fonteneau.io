<template>
  <main>
    <section class="projects">
      <div class="header">
        <h1>Mes projets</h1>
      </div>
      <div class="filters">
        <span>Filtrer par</span>
        <div>
          <select
            name="project_type"
            id="project_type"
            aria-label="Type de projet"
            v-model="projectType"
            required>
            <option
              value=""
              disabled
              selected
              hidden>
              Type de projet
            </option>
            <option value="all">Tout</option>
            <option value="Freelance">Freelance</option>
            <option value="Agence">Agence</option>
          </select>
        </div>
      </div>
      <div class="projects-list">
        <div
          v-for="projet in filteredProjects"
          :key="projet._path">
          <NuxtLink
            :to="projet._path"
            class="card">
            <NuxtImg
              :src="'/img/projects/thumbnail/' + projet.img + '_688x516.webp'"
              :alt="'Image illustrant le projet ' + projet.title"
              loading="lazy" />
            <div class="tag">
              <span>{{ projet.project_type }}</span>
            </div>
            <span class="link">{{ projet.title }}</span>
          </NuxtLink>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
const projectType = ref("all");

const { data: allProjects } = await useAsyncData("all-projects", () =>
  queryContent("projets").sort({ created_at: -1 }).find()
);

const filteredProjects = computed(() => {
  if (projectType.value === "all") {
    return allProjects.value;
  }
  return allProjects.value.filter(
    (projet) => projet.project_type === projectType.value
  );
});

useHead({
  title: "Mes projets - Quentin Fonteneau",
  meta: [
    {
      name: "description",
      content:
        "Explorez mes réalisations en tant que développeur freelance : projets web sur mesure en PHP et JavaScript. Découvrez mon savoir-faire au service de vos idées.",
    },
  ],
});
</script>
