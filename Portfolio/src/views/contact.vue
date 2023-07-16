<script setup></script>

<template>
  <section class="contact">
    <p class="contact__presentation">
      Vous souhaitez me contacter ? Merci de completer ce formulaire de contact,
      je vous repondrais dans les meilleures délais
    </p>
    <form action="#" class="contact__formulaire container">
      <div class="container__firstName">
        <input
          type="text"
          name="first-name"
          class="firstName__text"
          placeholder="Prénom"
          required
        />
      </div>
      <div class="container__lastName">
        <input
          type="text"
          name="last-name"
          class="contact__lastName"
          placeholder="Nom"
          required
        />
      </div>
      <div class="container__subject">
        <input
          type="text"
          name="subject"
          class="contact__subject"
          placeholder="Objet du message"
          required
        />
      </div>
      <div class="container__message">
        <input
          type="text"
          name="message"
          class="contact__message"
          placeholder="Votre message..."
          required
        />
      </div>
      <button class="contact__submit">Envoyer</button>
    </form>
  </section>
</template>

<style scoped></style>
