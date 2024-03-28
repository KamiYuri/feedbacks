<script setup lang="ts">
import StarRating from 'vue-star-rating';

import { useFeedbackStore } from '@/stores/feedbackStore';

const feedback = useFeedbackStore();
</script>

<template>
  <star-rating
    :rating="feedback.rating"
    :star-size="30"
    :rounded-corners="true"
    :border-width="2"
    :star-points="[23, 2, 14, 17, 0, 19, 10, 34, 7, 50, 23, 43, 38, 50, 36, 34, 46, 19, 31, 17]"
    @update:rating="feedback.rating = $event"
  >
  </star-rating>
</template>

<style scoped></style>
