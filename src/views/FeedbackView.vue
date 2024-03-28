<script setup lang="ts">
import RatingComponent from '@/components/RatingComponent.vue';
import CommentComponent from '@/components/CommentComponent.vue';
import { onMounted, watch } from 'vue';
import { useFeedbackStore } from '@/stores/feedbackStore';

const feedback = useFeedbackStore();

watch(feedback.$state, () => sendToParent(), {
  deep: true
});

const sendToParent = () => {
  window.top?.postMessage(JSON.parse(JSON.stringify(feedback.$state)), '*');
};

sendToParent();
</script>

<template>
  <div class="text-center space-y-10 flex flex-col items-center">
    <h1>Đánh giá dịch vụ công</h1>

    <!--Rating-->
    <RatingComponent />

    <!--Comment-->
    <CommentComponent />
  </div>
</template>

<style scoped></style>
