<template>
    <div class="div">
      <div class="div-2">
        <div class="column">
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/3b141d6bac80c3cac2a063608d0ca8224e4d4bce9307b7e7d327fa8ec665ac83?apiKey=b0cab2777511409392181b9d50ff6276&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/3b141d6bac80c3cac2a063608d0ca8224e4d4bce9307b7e7d327fa8ec665ac83?apiKey=b0cab2777511409392181b9d50ff6276&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3b141d6bac80c3cac2a063608d0ca8224e4d4bce9307b7e7d327fa8ec665ac83?apiKey=b0cab2777511409392181b9d50ff6276&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/3b141d6bac80c3cac2a063608d0ca8224e4d4bce9307b7e7d327fa8ec665ac83?apiKey=b0cab2777511409392181b9d50ff6276&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/3b141d6bac80c3cac2a063608d0ca8224e4d4bce9307b7e7d327fa8ec665ac83?apiKey=b0cab2777511409392181b9d50ff6276&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3b141d6bac80c3cac2a063608d0ca8224e4d4bce9307b7e7d327fa8ec665ac83?apiKey=b0cab2777511409392181b9d50ff6276&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/3b141d6bac80c3cac2a063608d0ca8224e4d4bce9307b7e7d327fa8ec665ac83?apiKey=b0cab2777511409392181b9d50ff6276&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/3b141d6bac80c3cac2a063608d0ca8224e4d4bce9307b7e7d327fa8ec665ac83?apiKey=b0cab2777511409392181b9d50ff6276&"
            class="img"
          />
        </div>
        <div class="column-2">
          <div class="div-3">
            <div class="div-4">À propos</div>
            <div class="div-5">À propos de moi</div>
            <div class="div-6">
              Moi c’est Quentin ! Je suis développeur et je travail dans le
              digital depuis
              <span style="font-weight: 700; color: rgba(58, 71, 208, 1)"
                >15 ans</span
              >. <br /><br />Maîtrisant les technologies
              <span style="font-weight: 700; color: rgba(58, 71, 208, 1)"
                >front-end et back-end,</span
              >
              je suis à l'écoute de vos besoins et de vos exigences, et je suis
              toujours prêt à vous proposer des
              <span style="font-weight: 700; color: rgba(58, 71, 208, 1)"
                >solutions</span
              >
              <span style="font-weight: 700; color: rgba(58, 71, 208, 1)"
                >adaptées</span
              >
              à votre projet.
            </div>
            <div class="div-7">En savoir plus</div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  
  
  <style scoped>
  .div {
    padding: 50px 80px;
  }
  @media (max-width: 991px) {
    .div {
      padding: 0 20px;
    }
  }
  .div-2 {
    gap: 20px;
    display: flex;
  }
  @media (max-width: 991px) {
    .div-2 {
      flex-direction: column;
      align-items: stretch;
      gap: 0px;
    }
  }
  .column {
    display: flex;
    flex-direction: column;
    line-height: normal;
    width: 56%;
    margin-left: 0px;
  }
  @media (max-width: 991px) {
    .column {
      width: 100%;
    }
  }
  .img {
    aspect-ratio: 1.19;
    object-fit: contain;
    object-position: center;
    width: 100%;
    overflow: hidden;
    align-self: stretch;
    margin: auto 0;
  }
  @media (max-width: 991px) {
    .img {
      max-width: 100%;
      margin-top: 40px;
    }
  }
  .column-2 {
    display: flex;
    flex-direction: column;
    line-height: normal;
    width: 44%;
    margin-left: 20px;
  }
  @media (max-width: 991px) {
    .column-2 {
      width: 100%;
    }
  }
  .div-3 {
    display: flex;
    flex-direction: column;
    align-self: stretch;
    color: var(--Primaire-Bleu-primaire, #3a47d0);
    font-weight: 800;
    margin: auto 0;
  }
  @media (max-width: 991px) {
    .div-3 {
      max-width: 100%;
      margin-top: 40px;
    }
  }
  .div-4 {
    letter-spacing: 0.8px;
    text-transform: uppercase;
    font: 16px Manrope, sans-serif;
  }
  @media (max-width: 991px) {
    .div-4 {
      max-width: 100%;
    }
  }
  .div-5 {
    color: var(--Primaire-Noir, #0f1346);
    margin-top: 8px;
    font: 44px Manrope, sans-serif;
  }
  @media (max-width: 991px) {
    .div-5 {
      max-width: 100%;
    }
  }
  .div-6 {
    leading-trim: both;
    text-edge: cap;
    margin-top: 40px;
    font: 600 20px/32px Manrope, sans-serif;
  }
  @media (max-width: 991px) {
    .div-6 {
      max-width: 100%;
    }
  }
  .div-7 {
    color: var(--Primaire-Bleu-primaire, #3a47d0);
    leading-trim: both;
    text-edge: cap;
    white-space: nowrap;
    justify-content: center;
    border-radius: 16px;
    border: 2px solid var(--Primaire-Bleu-primaire, #3a47d0);
    align-self: start;
    margin-top: 40px;
    padding: 21px 24px;
    font: 600 20px/160% Manrope, sans-serif;
  }
  @media (max-width: 991px) {
    .div-7 {
      white-space: initial;
      padding: 0 20px;
    }
  }
  </style>