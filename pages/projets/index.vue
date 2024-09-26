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
            <option value="freelance">Freelance</option>
            <option value="agence">Agence</option>
          </select>
        </div>
      </div>
      <div class="projects-list">
        <div
          v-for="projet in projets"
          :key="projet._path">
          <NuxtLink
            :to="projet._path"
            class="card">
            <img
              :src="'/img/' + projet.img"
              loading="lazy" />
            <div class="tag">
              <span>En agence</span>
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

const { data: projets, refresh } = await useAsyncData("projets", () => {
  const query = queryContent("projets");
  if (projectType.value !== "all") {
    // Applique le filtre seulement si ce n'est pas "all"
    query.where(
      projectType.value !== "all" ? { project_type: projectType.value } : {}
    );
  }
  return query.find();
});

watchEffect(() => {
  console.log("projectType changed:", projectType.value);
  refresh(); // Rafraîchir la requête dès que la catégorie change
});

definePageMeta({
  documentDriven: {
    page: false, // Keep page fetching enabled
  },
});
</script>
