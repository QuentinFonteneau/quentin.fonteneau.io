<template>
  <header>
    <div class="header">
      <NuxtLink to="/">
        <Logo />
      </NuxtLink>

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

      <div class="menu-mobile">
        <img
          class="menu-icon__open active"
          src="/img/menu_open.svg" />
        <img
          class="menu-icon__close"
          src="/img/menu_close.svg" />
        <nav class="">
          <ul>
            <li><NuxtLink to="/projets">Projets</NuxtLink></li>
            <li><NuxtLink to="/articles">Articles</NuxtLink></li>
            <li><NuxtLink to="/a-propos">À propos</NuxtLink></li>
            <li><NuxtLink to="/contact">Me contacter</NuxtLink></li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>
