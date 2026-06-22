/**
 * LIVE CODING TASK 2: Custom useFetch Composable (Vue)
 * 
 * THE PROMPT:
 * "Write a custom Vue composable called `useFetch` that takes a URL. When called, 
 * it should fetch the data from the URL. It should return an object containing reactive 
 * references for: `{ data, loading, error }` so the component can render different states."
 */

import { ref } from 'vue';

// --- STARTING BOILERPLATE ---
export function useFetch(url) {
  // Your code here...
}

// Example Usage in a component:
// const { data, loading, error } = useFetch('https://api.example.com/users');


// --- EXPECTED SOLUTION (For Interviewer Only) ---
/*
export function useFetch(url) {
  const data = ref(null);
  const loading = ref(true);
  const error = ref(null);

  // Vue fetch composables often trigger immediately when called
  fetch(url)
    .then(res => {
      if (!res.ok) throw new Error('Network response was not ok');
      return res.json();
    })
    .then(json => {
      data.value = json;
      error.value = null;
    })
    .catch(err => {
      error.value = err.message;
    })
    .finally(() => {
      loading.value = false;
    });

  return { data, loading, error };
}
*/
