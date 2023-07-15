<script setup>
import { RouterLink, RouterView } from "vue-router";
import "../assets/CSS/styleComp.css";
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
        src="../assets/gif/logoEB.gif"
        alt="Logo avec les initiales E et B en violet sur fond crème"
      />
    </nav>
  </header>

  <RouterView />
</template>

<!-- <style scoped> -->
/* header { padding: 1em; background-color: #400738; } nav { height:125px;
display: flex; align-items: center; justify-content:center; } ul { display:
flex; flex-direction: row; } li { margin: 10px 25px; font-size: 24px; } li:hover
{ font-size: 30px; } a{ text-decoration: none; color: #F7E7D0; } a:hover {
opacity: 60%; color: #93B5F4; } img{ position: fixed; width: 125px; right: 1em;
top: 1em; border: 3px solid #400738; border-radius: 20%; } img:hover { width:
250px; } */

<!-- </style> -->
