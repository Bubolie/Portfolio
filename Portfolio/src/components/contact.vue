<script setup>

</script>

<template>
  <section id="contact" class="contact">
    <h1 class="contact__title">Vous souhaitez me contacter ?</h1>
    <p class="contact__presentation">
      Merci de completer ce formulaire, je me ferais un plaisir de vous répondre
      dans les meilleures délais
    </p>
    <form action="#" class="contact__formulaire container">
      <div class="container__name">
        <input
          type="text"
          name="first-name"
          class="container__nametext text"
          placeholder="Prénom"
          required
        />
        <input
          type="text"
          name="last-name"
          class="container__nametext text"
          placeholder="Nom"
          required
        />
      </div>
      <input
        type="email"
        name="email"
        class="container__email text"
        placeholder="Votre e-mail"
        required
      />
      <input
        type="text"
        name="subject"
        class="container__subject text"
        placeholder="Objet du message"
        required
      />
      <textarea
        type="text"
        name="message"
        class="container__message text"
        placeholder="Votre message..."
        required
      />
      <div class="container__button">
        <button type="submit" class="container__buttontext text">
          Envoyer
        </button>
      </div>
    </form>
  </section>
</template>

<style scoped>
.contact {
  margin: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.contact__presentation {
  width: 500px;
  text-align: center;
  margin-bottom: 40px;
}

.contact__formulaire {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 520px;
}

.text {
  padding: 10px;
  margin: 10px;
  border: solid 2px #93b5f4;
  border-radius: 20px;
  font-family: monospace;
  background-color: #400738;
  color: #f9f0e3;
}

.container__name {
  display: flex;
  flex-direction: row;
}

.container__nametext {
  width: 240px;
}

.container__message {
  width: 500px;
  min-height: 100px;
}

.container__button {
  text-align: end;
}

.container__buttontext {
  width: 100px;
}

.container__buttontext:hover {
  background-color: #93b5f4;
  color: #400738;
  cursor: pointer;
}
</style>
