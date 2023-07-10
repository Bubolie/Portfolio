<script setup>
import { RouterLink, RouterView } from 'vue-router';

</script>

<template>
  <header>
    <img alt="Photo d'identité d'une femme de type occidental, blonde aux yeux bleu" class="photo" src="../assets/image/photoProfil.png" width="125" height="125" />
      <nav>
        <ul>
          <li><RouterLink to="/">Je me présente...</RouterLink></li>
          <li><RouterLink to="/creations">Mes Créations</RouterLink></li>
          <li><RouterLink to="/contact">Me contacter ? Par ici...</RouterLink></li>
        </ul>
        
      </nav>
  </header>

  <RouterView />
</template>