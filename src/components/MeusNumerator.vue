<template>
  <section>
      <h3>counter: {{ numerus }}</h3>
      <h3> Square: {{ quadrataNumerus }}</h3>
      <div>
          <button @click="increment">+1</button>
          <button @click="decrement">-1</button>
      </div>
  </section>
</template>

<script lang="ts" setup>
import { useNumerator } from '@/composables/useNumerator';
import { ref } from 'vue';

interface Props {
  valorem: number;
}

const props = defineProps<Props>();
const { numerus, quadrataNumerus } = useNumerator(props.valorem);

const increment = () => {
  numerus.value++;
};

const decrement = () => {
  numerus.value--;
};
</script>
