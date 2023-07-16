<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <nav class="menu">
      <ul class="menu__list">
        <li class="menu__item">
          <RouterLink to="/">Qui suis-je ?</RouterLink>
        </li>
        <li class="menu__item">
          <RouterLink to="/creation">Mes Créations</RouterLink>
        </li>
        <li class="menu__item">
          <RouterLink to="/contact">Me contacter</RouterLink>
        </li>
      </ul>
      <img
        class="menu__logo"
        src="../assets/image/gif/logoEB.gif"
        alt="Logo avec les initiales E et B en violet sur fond crème"
      />
    </nav>
  </header>

  <RouterView />
</template>

<style scoped>
header { 
  padding: 1em;
  background-color: #400738;
  border-bottom: solid #93B5F4 3px;
}

.menu {
  height: 75px; 
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.menu__list {
  display: flex;
  flex-direction: row;
}

.menu__item {
  margin: 10px 25px;
  font-size: 20px;
}

.menu__item a {
  text-decoration: none;
  color: #93B5F4;
}

.menu__item:hover {
    font-size: 25px;
    border-left: solid 1px #93B5F4;
    border-right: solid 1px #93B5F4;
    padding : 5px;
}

.menu__logo {
    position: fixed;
    width: 75px;
    right: 1em;
    top: 1em;
    border: 3px solid #93B5F4;
    border-radius: 20%;
}

.menu__logo:hover {
  width: 250px;
}
</style>
