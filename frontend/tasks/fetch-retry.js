/**
 * LIVE CODING TASK 2: Fetch with Retry
 * 
 * THE PROMPT:
 * "Write a function `fetchWithRetry` that wraps the native `fetch` API. It should take 
 * a URL and a number of maximum retries. If the fetch fails (e.g., network error), it 
 * should retry the request until the retries run out. If it succeeds, return the response."
 */

// --- STARTING BOILERPLATE ---
async function fetchWithRetry(url, retries = 3) {
  // Your code here...
}

// Example usage:
// fetchWithRetry('https://api.example.com/data', 3)
//   .then(data => console.log(data))
//   .catch(err => console.error("Failed after 3 retries", err));


// --- EXPECTED SOLUTION (For Interviewer Only) ---
/*
async function fetchWithRetry(url, retries = 3) {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("Status code not ok");
    return await response.json();
  } catch (error) {
    if (retries > 0) {
      console.log(`Retrying... ${retries} attempts left`);
      return fetchWithRetry(url, retries - 1);
    }
    throw new Error("Max retries reached");
  }
}
*/
