<script setup>
import { RouterLink, RouterView } from 'vue-router';

</script>

<template>
  <header>
    <h1>Portfolio d'Elodie Besen</h1>  
    <nav>
        <ul>
          <li><RouterLink to="/">Je me présente...</RouterLink></li>
          <li><RouterLink to="/creation">Mes Créations</RouterLink></li>
          <li><RouterLink to="/contact">Me contacter ? Par ici...</RouterLink></li>
        </ul>
      </nav>
    <img alt="Photo d'identité d'une femme de type occidental, blonde aux yeux bleu" class="photo" src="../assets/image/photoProfil.png" width="125" height="125" />
</header>

  <RouterView />
</template>

<style scoped>
header {
  display: flex;
  margin: 1em;
  flex-direction: column;
}

h1 {
display: flex;
margin: 0.5em;
justify-content: center;
align-items: center;
}

ul{
    width: 100%;
display: flex;


}
li {
  margin: 1em;
}
nav {
  width: 100%;
  display: flex;
  justify-content: baseline;


}
img {
  position:relative;
}
</style>