<!--
 * LIVE CODING TASK: Filtered List (Vue)
 * 
 * THE PROMPT (Share with candidate):
 * "Below is a hardcoded array of users. Build a simple component that renders this list. 
 * Add a text input at the top. As the user types into the input, the list should instantly 
 * filter down to only show users whose name matches the search text."
-->

<!-- === STARTING BOILERPLATE (Give this to candidate) === -->
<template>
  <div>
    <!-- Your input and list code here -->
  </div>
</template>

<script setup>
const USERS = [
  { id: 1, name: 'Alice', role: 'Engineer' },
  { id: 2, name: 'Bob', role: 'Designer' },
  { id: 3, name: 'Charlie', role: 'Product Manager' },
  { id: 4, name: 'David', role: 'Engineer' },
];
</script>


<!-- === EXPECTED SOLUTION (For Interviewer Only) === -->
<!--
<template>
  <div>
    <input v-model="searchTerm" placeholder="Search users..." />
    <ul>
      <li v-for="user in filteredUsers" :key="user.id">
        {{ user.name }} - {{ user.role }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const USERS = [
  { id: 1, name: 'Alice', role: 'Engineer' },
  { id: 2, name: 'Bob', role: 'Designer' },
  { id: 3, name: 'Charlie', role: 'Product Manager' },
  { id: 4, name: 'David', role: 'Engineer' },
];

const searchTerm = ref('');

// CORRECT: Using computed property for derived state.
// TRAP: Do NOT use a `watch` effect to populate a second reactive array.
const filteredUsers = computed(() => {
  return USERS.filter(user => 
    user.name.toLowerCase().includes(searchTerm.value.toLowerCase())
  );
});
</script>
-->
