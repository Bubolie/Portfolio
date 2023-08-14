<template>
    <div v-if="modalVisible" class="modal__overlay" @click="closeModal">
      <div class="modal__border" @click.stop>
        <button class="modal__button" @click="closeModal">X</button>
        <div class="modal__container">
          <h3 class="modal__title">{{ title }}</h3>
          <p class="modal__body">Langages utilisés : {{ lang }}</p>
          <p class="modal__body">Date de création : {{ date }}</p>
          <p class="modal__body">Logiciel utilisé : {{ logiciel }}</p>
          <p class="modal__body">{{description}} <a :href="link" target="_blank">ici</a> </p>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  props: {
    modalVisible: Boolean,
    title: String,
    lang: String,
    logiciel: String,
    date: String,
    description: String,
    link: String,
  },
  methods: {
    closeModal() {
      this.$emit("close");
    },
  },
};
</script>

<style scoped>
.modal__overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.7);
}

.modal__border {
  width: 450px;
  height: 300px;
  background-color: #f9f0e3;
  border: solid 5px #93b5f4;
  border-radius: 50px;
}

.modal__container {
  padding: 20px;
}

.modal__title {
  margin-top: 0;
  color: #400738;
  font-weight: bold;
  font-size: 30px;
  text-align: center;
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

</style>
