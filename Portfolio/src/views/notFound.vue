<script>
export default {
  name:'notFound',
  methods: {
    before(){
      this.$router.go(-1);
    }
  }
};
</script>

<template>
  <div class="not-found">
    <h1 class="not-found__title">404 - Page non trouvée </h1>
    <img class="not-found__image" src="../assets/image/404-error.png" title="Code Erreur" alt="Schema d'un ordinateur bleu avec les yeux en forme de croix et une bouche en 'W' "/>
    <p class="not-found__text">La page que vous cherchez n'existe pas, merci de revenir à la page d'accueil en cliquant  <router-link to="/">ici</router-link></p>
  </div>
</template>

<style scoped>

.not-found {
  border: solid 10px;
  display: flex;
  flex-direction: column;
  justify-content : center;
  align-items: center;
}
.not-found__title {
  font-size: 40px;
}
.not-found__image {
  width: 250px;
}
.not-found__text {
  text-align: center;
}
</style>
