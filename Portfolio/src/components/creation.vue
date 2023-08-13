<template>
  <section id="project">
    <h1>Mes projets</h1>
    <section v-for="project in projects" :key="project.title" class="creation">
      <img
        class="creation__image"
        :src="project.image"
        :alt="project.descriptionImage"
      />
      <div class="creation__info">
        <h2 class="creation__title">{{ project.title }}</h2>
        <div id="button-modal">
          <button class="creation__moreDetail" @click="showModal(project)">
            Plus de détail
          </button>
        </div>
      </div>
    </section>
    
    <Transition name="modal">
       <Modal
      :modalVisible="activeModal !== null"
      :title="activeModal ? activeModal.title : ''"
      :lang="activeModal ? activeModal.lang : ''"
      :logiciel="activeModal ? activeModal.logiciel : ''"
      :date="activeModal ? activeModal.date : ''"
      :description=" activeModal ? activeModal.description : ''"
      :link="activeModal ? activeModal.link : ''"
      @close="hideModal"
    />
    </Transition>
  </section>
</template>

<script>
import Modal from "./modal.vue";
import { ref } from "vue";

const projects = [
  {
    title: "Curriculum Vitae",
    image: "./src/assets/image/imageCV.png",
    descriptionImage:
      "CV d'une femme developpeur web junior en violet et beige",
    lang: "HTML et CSS",
    logiciel: "Virtual Studio Code",
    date: "30 mai 2023",
    description: "Pour voir sur GitHub, cliquez ",
    link: "https://github.com/Bubolie/Curriculum-Vitae.git",
  },
  { 
    title: "Cahier des Charges",
    image: "./src/assets/image/imageCDC.png",
    descriptionImage:
      "Page de couverture d'un cahier des charges pour la Socketterie en rose et noire",
    lang: "Word",
    logiciel: "Word",
    date: "11 juin 2023",
    description: "Pour voir un extrait du PDF, cliquez ",
    link: "/src/assets/Documents/CDC-socketterie-extrait.pdf",
  },
  {
    title: "Espace de commentaires",
    image: "./src/assets/image/imageEspaceCom.png",
    descriptionImage:
      "Image avec 3 faux commentaires et un formulaire pour ajouter des commentaires",
    lang: "HTML, CSS et JavaScript",
    logiciel: "Virtual Studio Code",
    date: "30 juin 2023",
    description: "Pour voir sur GitHub, cliquez ",
    link: "https://github.com/Bubolie/espaceDeCommentaire.git",
  },
  // d'autres porjets peuvent être ajouter ici
];

export default {
  components: {
    Modal,
  },
  setup() {
    const activeModal = ref(null);

    function showModal(project) {
      document.body.style.overflow = "hidden";
      activeModal.value = project;
    }

    function hideModal() {
      document.body.style.overflow = "auto";
      activeModal.value = null;
    }

    return {
      activeModal,
      showModal,
      hideModal,
      projects,
    };
  },
};
</script>

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

.creation__image:hover {
  box-shadow: 25px 15px 15px;
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

.modal-enter-active, .modal-leave-active {
  transition: opacity 1500ms;
}

.modal-enter-from, .modal-leave-to- {
  opacity: 0;
}

</style>
