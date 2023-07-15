<template>
  <section class="creation">
    <div class="creation__image">
      <img src="../assets/image/imageCV.png" alt="Image dun CV" />
    </div>
    <div class="creation__info">
      <h2 class="creation__tittle">Curriculum Vitae</h2>
      <button class="creation__moreDetail">Plus de détails</button>
    </div>
  </section>
</template>

<style scoped>
.creation {
  display: flex;
  margin: 50px;
  align-items: center;
  justify-content: center;
}

.creation__info{
  margin: 20px;
}

.creation__title {
  margin: 30px;
}
.creation__image {
  width: 300px;
  position: relative;
}
.creation__moreDetail {
  height: 25px;
  margin: 10px;
}
</style>
