<template>
  <h1>Mi primera App de Vue</h1>

  <MeusNumerator :valorem="7"/>
  <MeusNumeratorScript :valorem="10"/>
  <MeusNumeratorScript2 :valorem="15"/>
</template>

<script lang="ts" setup>
import MeusNumeratorScript2 from './components/meus-numerator-script/MeusNumeratorScript2.vue';
import MeusNumerator from './components/MeusNumerator.vue';
import MeusNumeratorScript from './components/MeusNumeratorScript.vue';


</script>
