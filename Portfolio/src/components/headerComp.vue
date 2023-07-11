<script setup>
import { RouterLink, RouterView } from 'vue-router';

</script>

<template>
  <header>
    <h1>Portfolio d'Elodie Besen</h1>
    <img alt="Photo d'identité d'une femme de type occidental, blonde aux yeux bleu" class="photo" src="../assets/image/photoProfil.png"/>
    <nav>
        <ul>
          <li><RouterLink to="/">Je me présente...</RouterLink></li>
          <li><RouterLink to="/creation">Mes Créations</RouterLink></li>
          <li><RouterLink to="/contact">Me contacter ? Par ici...</RouterLink></li>
        </ul>
      </nav>
    
</header>

  <RouterView />
</template>

<style scoped>
header { 
  display: flex;
  padding: 1em;
  flex-wrap: wrap;
  background-color: #400738;

}

h1 {
display: flex;
margin: 0.5em;
justify-content: center;
align-items: center;
flex-basis: 90%;
font-size: 4em;
  color: #F7E7D0;
  z-index: 1;
}

nav {
  display: flex;
  width: 100%;
  justify-content:center;

}

ul {
  display: flex;
  flex-direction: row;
}

li {
  margin: 10px;
  padding:10px;
}
li:hover {
    font-size: 20px;

}
a{
  text-decoration: none;
  color: #F7E7D0;
}
 a:hover {
      opacity: 70%;
      color: #93B5F4;
}


img{
    position: fixed;
    width: 125px;
    align-items: end;
    right: 20px;
    }
</style>