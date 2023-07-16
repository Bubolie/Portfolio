<template>
  <button id="swipeUp" @click="returnTop">
    <img src="../assets/image/swipe-up.png" alt="fléche vers le haut" />
  </button>
</template>

<style scoped>
#swipeUp {
  width: 75px;
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #f9f0e3;
  border: solid 3px;
  cursor: pointer;
  border-radius: 15px;
}

#swipeUp:hover {
  background-color: #93b5f4;
}
</style>

<script setup>
function returnTop() {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
}
</script>
