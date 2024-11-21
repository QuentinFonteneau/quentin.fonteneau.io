<template>
  <header>
    <div class="header">
      <NuxtLink
        to="/"
        aria-label="Retour à la page d'accueil">
        <NuxtImg
          src="/img/build/logo.svg"
          alt="Logo du site Quentin Fonteneau"
          class="logo"
          width="320"
          height="46" />
      </NuxtLink>

      <!-- Menu pour les écrans de bureau -->
      <div class="menu-desktop">
        <nav>
          <ul>
            <li><NuxtLink to="/projets">Projets</NuxtLink></li>
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
        <NuxtImg
          v-if="!isMenuOpen"
          class="menu-icon__open active"
          src="/img/build/menu_open.svg"
          @click="toggleMenu"
          alt="Ouvrir le menu"
          width="48"
          height="32" />
        <!-- Icône pour fermer le menu -->
        <NuxtImg
          v-if="isMenuOpen"
          class="menu-icon__close active"
          src="/img/build/menu_close.svg"
          @click="toggleMenu"
          alt="Fermer le menu"
          width="48"
          height="32" />
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
