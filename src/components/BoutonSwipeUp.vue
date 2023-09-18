<template>
  <button
    id="swipeUp"
    @click="returnTop"
    data-aos="fade-up"
    data-aos-anchor="#project"
  >
    <img
      src="../assets/image/swipe-up.png"
      alt="fléche vers le haut"
      data-aos="fade-up"
      data-aos-anchor="#project"
    />
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
  border-radius: 15px;
}

#swipeUp:hover {
  background-color: #93b5f4;
}
</style>

<script>
export default {
  setup() {
    function returnTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
    return {
      returnTop,
    };
  },
};
</script>
