<template>
  <footer>
    <div class="footer">
      <div class="footer__first">
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
        <NuxtImg
          loading="lazy"
          src="/img/build/linkedin.svg"
          class="linkedin"
          alt="Logo linkedin"
          width="40"
          height="40" />
      </div>
      <div class="footer__second">
        <ul>
          <li><NuxtLink to="/">Mentions légales</NuxtLink></li>
          <li><NuxtLink to="/">Plan du site</NuxtLink></li>
          <li><NuxtLink to="/">Gestion des cookies</NuxtLink></li>
        </ul>
        <span class="copyright">© Quentin Fonteneau - 2024</span>
      </div>
    </div>
  </footer>
</template>
