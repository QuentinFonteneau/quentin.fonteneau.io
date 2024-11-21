<template>
  <section class="listing">
    <div class="header">
      <h2 class="title">Mes hobbies</h2>
    </div>
    <div class="card-list">
      <div>
        <NuxtImg
          :src="'/img/build/switch.png'"
          :alt="'Image illustrant le projet '"
          sizes="(max-width: 320px) 272px, (max-width: 551px) 503px, (max-width: 640px) 260px, (max-width: 768px) 348px, (max-width: 927px) 372px, (max-width: 1024px) 358px, (max-width: 1536px) 443px, 518px"
          quality="90"
          loading="lazy" />
      </div>
      <div>
        <NuxtImg
          :src="'/img/build/sport.png'"
          :alt="'Image illustrant le projet '"
          sizes="(max-width: 320px) 272px, (max-width: 551px) 503px, (max-width: 640px) 260px, (max-width: 768px) 348px, (max-width: 927px) 372px, (max-width: 1024px) 358px, (max-width: 1536px) 443px, 518px"
          quality="90"
          loading="lazy" />
      </div>
      <div>
        <NuxtImg
          :src="'/img/build/running.png'"
          :alt="'Image illustrant le projet '"
          sizes="(max-width: 320px) 272px, (max-width: 551px) 503px, (max-width: 640px) 260px, (max-width: 768px) 348px, (max-width: 927px) 372px, (max-width: 1024px) 358px, (max-width: 1536px) 443px, 518px"
          quality="90"
          loading="lazy" />
      </div>
    </div>
  </section>
</template>
