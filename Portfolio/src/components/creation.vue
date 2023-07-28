<script setup>
import Modal from "../components/modal.vue";
import { ref } from "vue";

const showModal = ref(false);

</script>

<template>
  <section id="project">
    <h1>Mes projets</h1>
    <section class="creation">
      <img
        class="creation__image"
        src="../assets/image/imageCV.png"
        alt="Image dun CV"
      />
      <div class="creation__info">
        <h2 class="creation__title">Curriculum Vitae</h2>

        <div id="button-modal">
          <button class="creation__moreDetail" @click="showModal = true">
            Plus de détail
          </button>
            <modale1
              :show="showModal"
              @close="showmodal = false"
              title="Curriculum Vitae"
              lang="HTML et CSS"
              logiciel="Virtual Studio Code"
              date="30 mai 2023"
              link="Voir sur GitHub : ici"
            >
            </modale1>
                  </div>
      </div>
    </section>

    <section class="creation">
      <img
        class="creation__image"
        src="../assets/image/imageCDC.png"
        alt="Image de la page d'acceuil et sommaire d'un cahier des Cahrge pour l'entreprise La Socketterie"
      />
      <div class="creation__info">
        <h2 class="creation__title">Cahier des Charges</h2>
        <div id="button-modal">
          <button class="creation__moreDetail" @click="showModal = true">
            Plus de détail
          </button>
          <modal name="CDC"
            :show="showModal"
            @close="showModal = false"
            title="Cahier des Charges"
            logiciel="Word"
            date="11 juin 2023"
            link="Voir un extrait du PDF ici"
          >
          </modal>
        </div>
        <div></div>
      </div>
    </section>

    <section class="creation">
      <img
        class="creation__image"
        src="../assets/image/imageEspace Com.png"
        alt="Image d'un espace de commentaires"
      />
      <div class="creation__info">
        <h2 class="creation__title">Espace de commentaires</h2>

        <div id="button-modal">
          <button class="creation__moreDetail" @click="showModal = true">
            Plus de détail
          </button>
            <modal name="espaceCom"
              :show="showModal"
              @close="showModal = false"
              title="Espace de commentaires"
              lang="HTML, CSS et JavaScript"
              logiciel="Virtual Studio Code"
              date="30 juin 2023"
              link="Voir sur GitHub : ici"
            >
            </modal>
        </div>
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
  margin-left: 100px;
  margin-right: 100px;
  padding: 50px;
  border-top: solid 3px #400738;
  display: flex;
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
  background-color: #f9f0e3;
  color: #400738;
}

.creation__moreDetail:hover {
  background-color: #400738;
  color: #f9f0e3;
}
</style>
