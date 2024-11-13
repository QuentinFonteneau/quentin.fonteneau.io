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
            <picture>
              <!-- Image large pour les grands écrans -->
              <source
                :srcset="
                  '/img/projects/thumbnail/' + projet.img + '_520x390.webp'
                "
                media="(min-width: 1200px)"
                type="image/webp" />

              <!-- Image moyenne pour les écrans de taille moyenne -->
              <source
                :srcset="
                  '/img/projects/thumbnail/' + projet.img + '_520x390.webp'
                "
                media="(min-width: 768px)"
                type="image/png" />

              <!-- Image petite pour les petits écrans -->
              <source
                :srcset="
                  '/img/projects/thumbnail/' + projet.img + '_520x390.webp'
                "
                media="(max-width: 767px)"
                type="image/png" />

              <img
                src=""
                loading="lazy" />
            </picture>

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
  queryContent("projets").find()
);

const filteredProjects = computed(() => {
  if (projectType.value === "all") {
    return allProjects.value;
  }
  return allProjects.value.filter(
    (projet) => projet.project_type === projectType.value
  );
});

definePageMeta({
  documentDriven: {
    page: false, // Keep page fetching enabled
  },
});
</script>
