<script>
import { ref } from "vue";
export default {
  setup() {
    const dataForm = ref({
      firstName: "",
      lastName: "",
      email: "",
      subject: "",
      message: "",
    });
    function submitForm() {
      alert(
        "Vous allez être redirigé vers votre messagerie par défaut pour finir d'envoyer le mail.Encore merci pour votre message !"
      );
    }

    function eraseForm() {
      dataForm.value.firstName = "";
      dataForm.value.lastName = "";
      dataForm.value.email = "";
      dataForm.value.subject = "";
      dataForm.value.message = "";
    }

    return {
      dataForm,
      submitForm,
      eraseForm,
    };
  },
};
</script>

<template>
  <section id="contact" class="contact">
    <h1 class="contact__title">Vous souhaitez me contacter ?</h1>
    <p class="contact__presentation">
      Merci de completer ce formulaire, je me ferais un plaisir de vous répondre
      dans les meilleurs délais
    </p>
    <form
      id="contact-Form"
      action="mailto:elodie41.m@gmail.com"
      method="post"
      enctype="text/plain"
      @submit="submitForm"
      class="contact__formulaire container"
    >
      <div class="container__name">
        <input
          type="text"
          name="first-name"
          class="container__nametext text"
          v-model="dataForm.firstName"
          placeholder="Prénom"
          autocomplete="given-name"
          required
        />
        <input
          type="text"
          name="last-name"
          class="container__nametext text"
          v-model="dataForm.lastName"
          placeholder="Nom"
          autocomplete="family-name"
          required
        />
      </div>
      <input
        type="email"
        name="email"
        class="container__email text"
        v-model="dataForm.email"
        placeholder="Votre e-mail"
        autocomplete="email"
        required
      />
      <input
        type="text"
        name="subject"
        class="container__subject text"
        v-model="dataForm.subject"
        placeholder="Objet du message"
        required
      />
      <textarea
        type="text"
        name="message"
        class="container__message text"
        v-model="dataForm.message"
        placeholder="Votre message..."
        required
      />
      <div class="container__buttons">
         <button
        type="reset"
        @click="eraseForm"
        class="container__buttontext text">
        Effacer le formulaire
      </button>
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
  min-height: 100vh;
  width: auto;
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

.container__buttons {
  display: flex;
  justify-content: space-evenly;
}

.container__buttontext {
  width: 100px;
}

.container__buttontext:hover {
  background-color: #93b5f4;
  color: #400738;
}
</style>
