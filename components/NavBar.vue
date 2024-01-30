<template>
    <nav>
      <ul>
        <li><NuxtLink to="/projets">Projets</NuxtLink></li>
        <li><NuxtLink to="/articles">Articles</NuxtLink></li>
        <li><NuxtLink to="/a-propos">À propos</NuxtLink></li>
      </ul>
    </nav>
</template>
  
<style scoped>
ul {
    display: flex;
    align-items: center;
    gap: 80px;
}

li {
    display: flex;
    padding: 8px 0px;
    justify-content: center;
    align-items: center;
    gap: 10px;
}
</style>