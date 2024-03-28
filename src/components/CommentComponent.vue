<script setup lang="ts">
import { FwbTextarea } from 'flowbite-vue';
import { useFeedbackStore } from '@/stores/feedbackStore';

const suggestedComments = [
  'Kê khai biểu mẫu hồ sơ tiện lợi',
  'Thủ tục rút gọn, dễ hiểu',
  'Dịch vụ nhanh, gọn và chuyên nghiệp'
];

const feedback = useFeedbackStore();
</script>

<template>
  <div class="flex flex-col text-left space-y-2">
    <fwb-textarea v-model="feedback.comment" id="comment" :rows="4" :cols="50" label="Comment" />

    <div class="grid grid-cols-2">
      <template v-for="(suggestedComment, index) in suggestedComments" v-bind:key="index">
        <button
          type="button"
          class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700"
          @click="feedback.comment = suggestedComment"
        >
          {{ suggestedComment }}
        </button>
      </template>
    </div>
  </div>
</template>

<style scoped></style>
