import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useFeedbackStore = defineStore('counter', () => {
  const rating = ref(3);
  const comment = ref('');

  return { rating, comment };
});
