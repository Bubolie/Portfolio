<template>
  <section class="creation">
    <div class="creation__image">
      <img src="../assets/image/imageCDC.png" alt="Image de la page d'acceuil et sommaire d'un cahier des Cahrge pour l'entreprise La Socketterie" />
    </div>
    <div class="creation__info">
      <h2 class="creation__tittle">Cahier des Charges</h2>
      <button class="creation__moreDetail">Plus de détails</button>
    </div>
  </section>
</template>

<style scoped>
.creation {
  display: flex;
  padding: 50px;
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
