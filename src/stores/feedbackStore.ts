import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useFeedbackStore = defineStore('counter', () => {
  const rating = ref(3);
  const comment = ref('');

  async function submitFeedback(query: object) {
    const response = await fetch('https://enoxohxi8ubq.x.pipedream.net', {
      method: 'POST',
      body: JSON.stringify({ rating: rating.value, comment: comment.value, query})
    });
    return response.ok;
  }

  return { rating, comment, submitFeedback };
});
