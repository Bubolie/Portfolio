<template>
  <div class="modal__overlay" @click="$emit('close')">
    <div class="modal__border" @click.stop>
      <button class="modal__button" @click="$emit('close')">X</button>
      <div class="modal__container">
        <h3 class="modal__title">{{ title }}</h3>
        <p class="modal__body">
          <span class="modal__body__item">Langages utilisés</span> : {{ lang }}
        </p>
        <p class="modal__body">
          <span class="modal__body__item">Date de création</span> : {{ date }}
        </p>
        <p class="modal__body">
          <span class="modal__body__item">Logiciel utilisé</span> :
          {{ logiciel }}
        </p>
        <p class="modal__body">
          <span class="modal__body__item__active">{{ textLink }}</span>
          <a :href="link" target="_blank">ici</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    lang: String,
    logiciel: String,
    date: String,
    textLink: String,
    link: String,
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

.modal__body__item {
  text-decoration: underline;
  font-weight: bold;
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
