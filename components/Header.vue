<template>
  <header>
    <div class="header">
      <!-- Logo avec lien vers la page d'accueil -->
      <NuxtLink to="/">
        <Logo />
      </NuxtLink>

      <!-- Menu pour les écrans de bureau -->
      <div class="menu-desktop">
        <nav>
          <ul>
            <li><NuxtLink to="/projets">Projets</NuxtLink></li>
            <li><NuxtLink to="/articles">Articles</NuxtLink></li>
            <li><NuxtLink to="/a-propos">À propos</NuxtLink></li>
          </ul>
        </nav>
        <NuxtLink
          to="/contact"
          class="btn"
          >Me contacter</NuxtLink
        >
      </div>

      <!-- Menu pour les écrans mobiles -->
      <div class="menu-mobile">
        <!-- Icône pour ouvrir le menu -->
        <img
          v-if="!isMenuOpen"
          class="menu-icon__open active"
          src="/img/menu_open.svg"
          @click="toggleMenu" />
        <!-- Icône pour fermer le menu -->
        <img
          v-if="isMenuOpen"
          class="menu-icon__close active"
          src="/img/menu_close.svg"
          @click="toggleMenu" />
        <!-- Navigation pour le menu mobile -->
        <nav :class="{ 'is-open': isMenuOpen }">
          <ul>
            <li>
              <NuxtLink
                to="/projets"
                @click="closeMenu"
                >Projets</NuxtLink
              >
            </li>
            <li>
              <NuxtLink
                to="/articles"
                @click="closeMenu"
                >Articles</NuxtLink
              >
            </li>
            <li>
              <NuxtLink
                to="/a-propos"
                @click="closeMenu"
                >À propos</NuxtLink
              >
            </li>
            <li>
              <NuxtLink
                to="/contact"
                @click="closeMenu"
                >Me contacter</NuxtLink
              >
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from "vue";

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
  document.body.classList.toggle("is-open", isMenuOpen.value);
};

const closeMenu = () => {
  isMenuOpen.value = false;
  document.body.classList.remove("is-open");
};
</script>
