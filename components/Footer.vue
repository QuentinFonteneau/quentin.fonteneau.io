<template>
  <footer>
    <div class="first_part">
      <Logo />
      <img loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/8e8f3c76ca6cf5f37bc41cfb8898871ccb216af4c9fbea8b4b175b0c8b8ea721?apiKey=b0cab2777511409392181b9d50ff6276&"
        class="main-image" />
    </div>
    <div class="second_part">
      <div class="menu">Mentions légales</div>
      <div class="menu">Plan du site</div>
      <div class="menu">Gestion des cookies</div>
      <div class="copyright">
        © Quentin Fonteneau - 2024
      </div>
    </div>
  </footer>
</template>
  
<style scoped>
footer {
  display: flex;
  padding: 80px 88px;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  gap: 56px;

  border-top: 1px solid var(--Primaire-Bleu-primaire, #3A47D0);
  background: var(--Primaire-White, #FFFEFD);
}

footer .first_part {
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
}

footer .second_part {
  display: flex;
  align-items: center;
  gap: 56px;
  align-self: stretch;
}
</style>