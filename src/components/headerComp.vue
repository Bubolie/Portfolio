<script setup>
import { RouterView } from "vue-router";
</script>

<template>
  <header>
    <nav class="menu">
      <ul class="menu__list">
        <li class="menu__item">
          <a href="#main">Qui suis-je ?</a>
        </li>
        <li class="menu__item">
          <a href="#project">Mes Créations</a>
        </li>
        <li class="menu__item">
          <a href="#contact">Me contacter</a>
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
  border-bottom: solid #93b5f4 6px;
  position: relative;
}

.menu {
  height: 75px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
}

.menu__list {
  display: flex;
  flex-direction: row;
}

.menu__item {
  margin: 10px 25px;
  font-size: 25px;
  text-align: center;
}

.menu__item a {
  text-decoration: none;
  color: #93b5f4;
}

.menu__item:hover {
  transition: 300ms ease-in-out;
  font-size: 20px;
  border-left: solid 1px #93b5f4;
  border-right: solid 1px #93b5f4;
  padding: 5px;
  text-decoration: underline #93b5f4;
}


.menu__logo {
  width: 75px;
  position: fixed;
  border: 3px solid #93b5f4;
  border-radius: 20%;
  top: 0;
  right: 0;
  margin: 1em;
}

.menu__logo:hover {
  width: 20%;
  transition: 1500ms ease-in-out;
  }
</style>
