<template>
  <main class="contact">
    <section>
      <div class="image shadow-top-right">
        <img src="/img/build/maison.webp" />
      </div>
    </section>
    <section>
      <h1 class="title">Contactez-moi</h1>
      <p class="subtitle">
        Un projet ?<br />
        Parlons-en !
      </p>
      <form @submit.prevent="submitForm">
        <div class="row">
          <label for="name">Votre nom et prénom *</label>
          <input
            type="text"
            v-model="form.name"
            id="name"
            placeholder="Votre nom et prénom" />
          <p
            v-if="errors.name"
            class="error">
            {{ errors.name }}
          </p>
        </div>
        <div class="row">
          <label for="email">Votre adresse e-mail *</label>
          <input
            type="email"
            v-model="form.email"
            id="email"
            placeholder="Votre adresse e-mail" />
          <p
            v-if="errors.email"
            class="error">
            {{ errors.email }}
          </p>
        </div>
        <div class="row">
          <label for="message">Votre projet en quelques lignes ? *</label>
          <textarea
            v-model="form.message"
            id="message"
            rows="5"
            placeholder="Décrivez votre projet"></textarea>
          <p
            v-if="errors.message"
            class="error">
            {{ errors.message }}
          </p>
        </div>
        <p>Tous les champs marqués d'un * sont obligatoires.</p>
        <input
          type="submit"
          value="Envoyer mon message" />
        <p
          v-if="statusMessage"
          :class="{ success: isSuccess, error: !isSuccess }">
          {{ statusMessage }}
        </p>
      </form>
    </section>
  </main>
</template>

<script setup>
import { ref } from "vue";

const form = ref({
  name: "",
  email: "",
  message: "",
});

const errors = ref({
  name: null,
  email: null,
  message: null,
});

const statusMessage = ref("");
const isSuccess = ref(false);

const config = useRuntimeConfig();
const username = config.public.basicAuthUsername;
const password = config.public.basicAuthPassword;
const apiUrl = config.public.apiUrl;
const authHeader = `Basic ${btoa(`${username}:${password}`)}`;

const validateForm = () => {
  console.info(form.value.message.trim().length);
  errors.value = {
    name:
      form.value.name.trim() === ""
        ? "C’est plus sympa si je sais comment vous appeler :)"
        : null,
    email:
      form.value.email.trim() === ""
        ? "Ce champ est obligatoire"
        : !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.value.email)
        ? "Format incorrect"
        : null,
    message:
      form.value.message.trim() === ""
        ? "Ce champ est obligatoire"
        : form.value.message.trim().length < 25
        ? "Ça serait sympa d'être un peu plus bavard :)"
        : null,
  };

  // Check if there are any errors
  return !Object.values(errors.value).some((error) => error !== null);
};

const submitForm = async () => {
  // Clear previous status
  statusMessage.value = "";
  isSuccess.value = false;

  if (!validateForm()) {
    return; // Do not proceed if validation fails
  }

  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: authHeader,
      },
      body: JSON.stringify(form.value),
    });

    if (response.ok) {
      statusMessage.value = "Votre message a été envoyé avec succès !";
      isSuccess.value = true;
      form.value = { name: "", email: "", message: "" }; // Reset the form
    } else {
      const errorData = await response.json();
      statusMessage.value = `Erreur : ${
        errorData.message || "Échec de l’envoi."
      }`;
      isSuccess.value = false;
    }
  } catch (error) {
    statusMessage.value = `Erreur réseau : ${error.message}`;
    isSuccess.value = false;
  }
};

useHead({
  title: "Contact - Quentin Fonteneau",
  meta: [
    {
      name: "description",
      content:
        "Contactez un développeur freelance spécialisé en PHP et JavaScript. Bénéficiez d'un accompagnement sur mesure pour vos projets web, de la conception au déploiement.",
    },
  ],
});
</script>

<style scoped>
.success {
  color: #218e6d;
}
.error {
  color: #a21a1a;
  font-size: 0.9rem;
  margin-top: 0.3rem;
}
</style>
