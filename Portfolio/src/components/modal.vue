<template>
  <Transition name="modal">
    <div v-if="show" class="modal__overlay">
      <div class="modal__border">
        <button class="modal__button" @click="$emit('close')">X</button>
        <div class="modal__container">
          <h3 class="modal__title">{{ title }}</h3>
          <p class="modal__body">Langages utilisés : {{ lang }}</p>
          <p class="modal__body">Date de création : {{ date }}</p>
          <p class="modal__body">Logiciel utilisé : {{ logiciel }}</p>
          <p class="modal__body">{{ link }}</p>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup>
const props = defineProps({
  show: Boolean,
  title: String,
  lang: String,
  logiciel: String,
  date: String,
  link: String,
});

// export default {

// }

</script>

<style scoped>
.modal__overlay {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
  transition: opacity 0.3s ease;
}

.modal__border {
  margin-top: 20%;
  width: 450px;
  height: 300px;
  background-color: #f9f0e3;
  border: solid 5px #93b5f4;
  border-radius: 50px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 2s ease;
}
.modal__container {
  padding: 20px;
}
.modal__title {
  margin-top: 0;
  color: #400738;
  font-weight: bold;
}

.modal__body {
  margin: 20px 0;
}

.modal__button {
  float: right;
  padding: 7px;
  background-color: #400738;
  color: #93b5f4;
  border: solid 4px #93b5f4;
  border-radius: 40%;
}

/* .modal-default-button {
  float: right;
} */

/* .modal-enter-from {
  opacity: 0;
} */

/* .modal-leave-to {
  opacity: 0;
} */

/* .modal-enter-from .modal-container,
.modal-leave-to .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}  */
</style>
