<template>
  <fwb-button @click="showModal">Feedback</fwb-button>

  <h1>Rating: {{ result.rating.toString() }}</h1>
  <h1>Comment: {{ result.comment }}</h1>

  <fwb-modal v-if="isShowModal" @close="closeModal">
    <template #header>
      <div class="flex items-center text-lg">Feedback here</div>
    </template>
    <template #body>
      <iframe
        ref="formFrame"
        src="http://localhost:5173/feedback"
        class="flex w-full h-96"
      ></iframe>
    </template>
    <template #footer>
      <div class="flex justify-between">
        <fwb-button @click="closeModal" color="alternative"> Close</fwb-button>
        <fwb-button @click="submit" color="green"> Submit</fwb-button>
      </div>
    </template>
  </fwb-modal>
</template>

<script lang="ts" setup>
import { onMounted, reactive, ref } from 'vue';
import { FwbButton, FwbModal } from 'flowbite-vue';

const isShowModal = ref(false);
const form = reactive({
  rating: 0,
  comment: ''
});
const result = reactive({
  rating: 0,
  comment: ''
});

function closeModal() {
  isShowModal.value = false;
}

function showModal() {
  isShowModal.value = true;
}

onMounted(() => {
  window.addEventListener('message', (event) => {
    if (event.data) {
      form.rating = event.data.rating;
      form.comment = event.data.comment;
    }
  });
});

function submit() {
  result.rating = form.rating;
  result.comment = form.comment;
  closeModal();
}
</script>
