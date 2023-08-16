<template>
  <section id="project">
    <div class="container title">
      <h1
        data-aos="fade-down"
        data-aos-easing="ease-in-out"
        data-aos-duration="3000"
        data-oas-anchor-placement="bottom-bottom"
      >
        Maintenant, découvrez les différents projets que j'ai déjà réalisé...
      </h1>
      <div data-aos="fade-down" data-aos-delay="1000" data-aos-duration="2000">
        <button @click="scrollToFirstProject" id="down">
          <img
            src="../assets/image/arrow.png"
            alt="double flèche vers le bas"
          />
        </button>
      </div>
    </div>
    <section
      v-for="project in projects"
      :key="project.title"
      class="container creation"
      id="firstProject"
    >
      <img
        class="creation__image"
        :src="project.image"
        :alt="project.descriptionImage"
        data-aos="fade-up"
        data-aos-easing="ease-in-sine"
        data-aos-duration="1500"
        data-oas-anchor-placement="bottom-bottom"
      />
      <div
        class="creation__info"
        data-aos="fade-left"
        data-aos-easing="ease-in-sine"
        data-aos-duration="3000"
        data-oas-anchor-placement="bottom-top"
      >
        <h2 class="creation__title">{{ project.title }}</h2>
        <p class="creation__description">{{ project.description }}</p>
        <div id="button-modal">
          <button class="creation__moreDetail" @click="showModal(project)">
            Plus de détail
          </button>
        </div>
      </div>
    </section>

    <Transition name="modal">
      <modal
        :modalVisible="activeModal !== null"
        :title="activeModal ? activeModal.title : ''"
        :lang="activeModal ? activeModal.lang : ''"
        :logiciel="activeModal ? activeModal.logiciel : ''"
        :date="activeModal ? activeModal.date : ''"
        :textLink="activeModal ? activeModal.textLink : ''"
        :link="activeModal ? activeModal.link : ''"
        @close="hideModal"
      />
    </Transition>
  </section>
</template>

<script>
import modal from "./modal.vue";
import { ref } from "vue";

const projects = [
  {
    title: "Curriculum Vitae",
    description: "Ce projet avait pour but de créer un CV en HTML et CSS.",
    image: "./src/assets/image/imageCV.png",
    descriptionImage:
      "CV d'une femme developpeur web junior en violet et beige",
    lang: "HTML5 et CSS3",
    logiciel: "Virtual Studio Code",
    date: "30 mai 2023",
    textLink: "Pour voir sur GitHub, cliquez ",
    link: "https://github.com/Bubolie/Curriculum-Vitae.git",
  },
  {
    title: "Cahier des Charges",
    description:
      "Ce projet avait pour but de créer d'un cahier des charge d'une entrprise fictive La Socketterie.",
    image: "./src/assets/image/imageCDC.png",
    descriptionImage:
      "Page de couverture d'un cahier des charges pour la Socketterie en rose et noire",
    lang: "Word",
    logiciel: "Word",
    date: "11 juin 2023",
    textLink: "Pour voir un extrait du PDF, cliquez ",
    link: "/src/assets/Documents/CDC-socketterie-extrait.pdf",
  },
  {
    title: "Espace de commentaires",
    description:
      "Ce projet avait pour but de créer un espace dynamique d'ajout de commentaire.",
    image: "./src/assets/image/imageEspaceCom.png",
    descriptionImage:
      "Image avec 3 faux commentaires et un formulaire pour ajouter des commentaires",
    lang: "HTML5, CSS3 et JavaScript",
    logiciel: "Virtual Studio Code",
    date: "30 juin 2023",
    textLink: "Pour voir sur GitHub, cliquez ",
    link: "https://github.com/Bubolie/espaceDeCommentaire.git",
  },
  // d'autres porjets peuvent être ajouter ici
];

export default {
  components: {
    modal,
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

    function scrollToFirstProject() {
      const firstProject = document.getElementById("firstProject");
      if (firstProject) {
        firstProject.scrollIntoView({
          behavior: "smooth",
        });
      }
    }

    return {
      activeModal,
      showModal,
      hideModal,
      projects,
      scrollToFirstProject,
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

.container {
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 100vh;
  margin: 20px;
}

.creation__info {
  margin: 20px;
  text-align: center;
}

.creation__title {
  margin: 30px;
}

.creation__description {
  text-align: center;
  margin: 10px;
}
.creation__image {
  position: relative;
  min-width: 200px;
  max-width: 400px;
  margin: 5%;
}

.creation__image:hover {
  box-shadow: 25px 15px 15px;
}

.creation__moreDetail {
  border-radius: 20px;
  border: solid 3px;
  margin: 10px;
  padding: 10px;
  cursor: pointer;
  background-color: #f9f0e3;
  color: #400738;
}

.creation__moreDetail:hover {
  background-color: #400738;
  color: #f9f0e3;
}

.modal-enter-active {
  transition: opacity 2000ms;
}

.modal-enter-from,
.modal-leave-to- {
  opacity: 0;
}

.title {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
}
#down {
  background-color: #93b5f4;
  border: none;
}
#down:hover {
  border: dashed 1px;
}
</style>
