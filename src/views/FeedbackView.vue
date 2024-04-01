<template>
  <div class="flex w-full justify-center">
    <div class="flex flex-col w-fit text-center space-y-10 items-center">
      <h1>Đánh giá dịch vụ công</h1>

      <!--Rating-->
      <RatingComponent />

      <!--Comment-->
      <CommentComponent />

      <!--Footer-->
      <div class="flex w-full justify-between py-4 border-t border-gray-200 rounded-b">
        <button
          type="button"
          class="py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100"
          @click="closeForm"
        >
          Hủy
        </button>
        <button
          type="button"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          @click="submitFeedback"
        >
          Gửi
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import RatingComponent from '@/components/RatingComponent.vue';
import CommentComponent from '@/components/CommentComponent.vue';
import { useFeedbackStore } from '@/stores/feedbackStore';
import { useRoute } from 'vue-router';

const feedbackStore = useFeedbackStore();

const route = useRoute();
const query = route.query;

const submitFeedback = async () => {
  const result = await feedbackStore.submitFeedback(query);
  sendMessages({ type: 'feedback-result', result });

  //alert(JSON.stringify(query))
  var UserID = query.userID;
  alert(UserID);
};

const closeForm = () => {
  sendMessages({ type: 'feedback-result' });
};

const sendMessages = (data: {}) => {
  window.top?.postMessage(JSON.parse(JSON.stringify(data)), '*');
};
</script>
