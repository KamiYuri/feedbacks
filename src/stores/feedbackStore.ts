import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useFeedbackStore = defineStore('counter', () => {
  const rating = ref(3);
  const comment = ref('');

  async function submitFeedback() {
    const response = await fetch('https://eoqieqhu9gaarxl.m.pipedream.net', {
      method: 'POST',
      body: JSON.stringify({ rating: rating.value, comment: comment.value })
    });
    return response.ok;
  }

  return { rating, comment, submitFeedback };
});
