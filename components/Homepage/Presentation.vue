<template>
  <section class="intro">

    <div class="presentation">
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="35" viewBox="0 0 32 35" fill="none">
        <path fill-rule="evenodd" clip-rule="evenodd"
          d="M9.91239 30.5479C7.19498 29.5448 4.31598 28.9178 1.52147 28.3308C0.919411 28.2065 0.32098 28.583 0.229881 29.1737C0.0953101 29.7614 0.486318 30.3401 1.04494 30.461C3.75366 31.0275 6.54704 31.6253 9.13648 32.5889C9.68811 32.7971 10.3234 32.5106 10.5434 31.9476C10.7634 31.3852 10.464 30.7565 9.91239 30.5479Z"
          fill="#FA9762" />
        <path fill-rule="evenodd" clip-rule="evenodd"
          d="M19.2264 20.1633C15.1186 15.2388 10.3989 10.8566 6.38778 5.81653C6.03196 5.34732 5.33885 5.26812 4.87169 5.64203C4.4045 6.01637 4.30604 6.70094 4.70529 7.17363C8.71536 12.2272 13.434 16.6224 17.5407 21.5604C17.9408 22.0226 18.6352 22.0845 19.1033 21.6988C19.5279 21.3101 19.6265 20.6256 19.2264 20.1633Z"
          fill="#FA9762" />
        <path fill-rule="evenodd" clip-rule="evenodd"
          d="M29.0183 3.27452C28.9391 5.89816 28.8595 8.52179 28.7802 11.1459C28.7322 11.7444 29.2166 12.2484 29.8271 12.2681C30.4376 12.2873 30.9125 11.8126 30.9606 11.2136C31.0402 8.58566 31.1201 5.95812 31.1997 3.33057C31.2043 2.72852 30.7197 2.22757 30.109 2.21137C29.5417 2.19866 29.0229 2.6729 29.0183 3.27452Z"
          fill="#FA9762" />
      </svg>
      <h2 class="title">Présentation</h2>
      <div class="subtitle">Bienvenue !</div>
      <div class="description">
        Moi c’est Quentin ! Je suis développeur et je travaille dans le digital depuis
        <span class="highlight">15 ans</span>. <br /><br />
        Maîtrisant les technologies <span class="highlight">front-end et back-end</span>,
        je suis à l'écoute de vos besoins et de vos exigences, et je suis toujours prêt à vous proposer des
        <span class="highlight">solutions adaptées</span>
        à votre projet.<br /><br />La suite, c’est juste en dessous !
      </div>
    </div>
    <div>
      <img loading="lazy"
        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/a2e6d2766fe53232c1c3a73a6b5c42a38402888837544ec284b0b8a2708d18c3?apiKey=b0cab2777511409392181b9d50ff6276&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/a2e6d2766fe53232c1c3a73a6b5c42a38402888837544ec284b0b8a2708d18c3?apiKey=b0cab2777511409392181b9d50ff6276&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a2e6d2766fe53232c1c3a73a6b5c42a38402888837544ec284b0b8a2708d18c3?apiKey=b0cab2777511409392181b9d50ff6276&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/a2e6d2766fe53232c1c3a73a6b5c42a38402888837544ec284b0b8a2708d18c3?apiKey=b0cab2777511409392181b9d50ff6276&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/a2e6d2766fe53232c1c3a73a6b5c42a38402888837544ec284b0b8a2708d18c3?apiKey=b0cab2777511409392181b9d50ff6276&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a2e6d2766fe53232c1c3a73a6b5c42a38402888837544ec284b0b8a2708d18c3?apiKey=b0cab2777511409392181b9d50ff6276&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/a2e6d2766fe53232c1c3a73a6b5c42a38402888837544ec284b0b8a2708d18c3?apiKey=b0cab2777511409392181b9d50ff6276&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/a2e6d2766fe53232c1c3a73a6b5c42a38402888837544ec284b0b8a2708d18c3?apiKey=b0cab2777511409392181b9d50ff6276&"
        class="image" />
    </div>
  </section>
</template>
  
<style scoped>
section .title {
  color: var(--Primaire-Bleu-primaire, #3A47D0);

  /* Desktop/Subtitle */
  font-family: Manrope;
  font-size: 0.775rem;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  letter-spacing: 0.8px;
  text-transform: uppercase;
}

section .subtitle {
  color: var(--Primaire-Noir, #0F1346);

  align-self: stretch;
  /* Desktop/H1 */
  font-family: Manrope;
  font-size: 54px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
}

.intro {
  display: flex;
  flex-direction: row;
  padding: 5.5rem 5rem;
  align-items: center;
  gap: 5rem;
}

.intro svg {
  width: 1.8255rem;
  height: 2rem;
  transform: rotate(4.586deg);
  position: absolute;
  left: 3.1875rem;
  top: 9.1875rem;
}

.presentation {
  width: 50%;
  justify-content: space-between;

}

.intro img {
  width: 50%;
}

.highlight {
  color: var(--Primaire-Bleu-primaire, #3A47D0);

}</style>