import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useFeedbackStore = defineStore('counter', () => {
  const rating = ref(3);
  const comment = ref('');

  async function submitFeedback(query) {
    const response = await fetch('https://en0ku7xcqv8yr.x.pipedream.net', {
      method: 'POST',
      body: JSON.stringify({ rating: rating.value, comment: comment.value, query})
    });
    return response.ok;
  }

  return { rating, comment, submitFeedback };
});
