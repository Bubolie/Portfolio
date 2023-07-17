<script setup></script>

<template>
  <section id="project">
    <h1>Mes projets</h1>
    <section class="creation">
      <img class="creation__image" src="../assets/image/imageCV.png" alt="Image dun CV"/>
      <div class="creation__info">
        <h2 class="creation__title">Curriculum Vitae</h2>
        <button class="creation__moreDetail">Plus de détails</button>
      </div>
    </section>

    <section class="creation">
      <img class="creation__image" src="../assets/image/imageCDC.png" alt="Image de la page d'acceuil et sommaire d'un cahier des Cahrge pour l'entreprise La Socketterie"/>
      <div class="creation__info">
        <h2 class="creation__title">Cahier des Charges</h2>
        <button class="creation__moreDetail">Plus de détails</button>
      </div>
    </section>

    <section class="creation">
      <img class="creation__image" src="../assets/image/imageEspace Com.png" alt="Image d'un espace de commentaires"/>
      <div class="creation__info">
        <h2 class="creation__title">Espace de commentaires</h2>
        <button class="creation__moreDetail">Plus de détails</button>
      </div>
    </section>
  </section>
</template>

<style scoped>
#project {
  background-color: #93b5f4;
  color: #400738;
  border-bottom: solid 6px #400738;
  border-top: solid 6px #400738;
}
.creation {
  margin: 20px 100px;
  padding: 30px;
  border-top: solid 3px #400738;
  display: flex;
  margin: 30px;
  align-items: center;
  justify-content: center;
}

.creation__info {
  margin: 20px;
  text-align: center;
}

.creation__title {
  margin: 30px;
}
.creation__image {
  position: relative;
  min-width: 200px;
  max-width: 400px;
}

.creation__moreDetail {
border-radius: 20px;
border: solid 3px;
padding: 10px;
cursor: pointer;
background-color:#F9F0E3;
color: #400738;
}
.creation__moreDetail:hover {
background-color: #400738;
color: #F9F0E3;
}
</style>
