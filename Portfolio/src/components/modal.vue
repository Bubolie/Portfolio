<template>

</template>

<script setup>
import { stringifyQuery } from 'vue-router';

defineProps {
    image: Image,
    titre:String,
  date:String,
  techno:String,
  logiciel:String,
  lien:String,

}
</script>