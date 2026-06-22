<!--
 * LIVE CODING TASK 3: Click Outside Modal (Vue)
 * 
 * THE PROMPT:
 * "Build a Modal component that takes an `isOpen` boolean and emits a `close` event. 
 * The modal should close ONLY when the user clicks on the dark overlay (outside the modal box). 
 * Clicking inside the white modal box should NOT close it."
-->

<!-- === STARTING BOILERPLATE === -->
<template>
  <div v-if="isOpen" class="overlay" style="background: rgba(0,0,0,0.5); position: fixed; inset: 0;">
    <div class="modal-box" style="background: white; padding: 20px; margin: 100px auto; width: 300px;">
      <h1>Modal Content</h1>
      <p>Clicking this white box should not close me!</p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  isOpen: Boolean
});

const emit = defineEmits(['close']);
</script>


<!-- === EXPECTED SOLUTION (For Interviewer Only) === -->
<!--
<template>
  <div v-if="isOpen" class="overlay" style="background: rgba(0,0,0,0.5); position: fixed; inset: 0;">
    <div ref="modalRef" class="modal-box" style="background: white; padding: 20px; margin: 100px auto; width: 300px;">
      <h1>Modal Content</h1>
      <p>Clicking this white box should not close me!</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

defineProps({
  isOpen: Boolean
});

const emit = defineEmits(['close']);
const modalRef = ref(null);

const handleOutsideClick = (event) => {
  if (modalRef.value && !modalRef.value.contains(event.target)) {
    emit('close');
  }
};

onMounted(() => {
  document.addEventListener('mousedown', handleOutsideClick);
});

onUnmounted(() => {
  document.removeEventListener('mousedown', handleOutsideClick);
});
</script>
-->
