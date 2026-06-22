/**
 * LIVE CODING TASK: Debounce Function
 * 
 * THE PROMPT (Share with candidate):
 * "Write a debounce function. It should take a function and a delay (in milliseconds) 
 * as arguments, and return a new function. This new function should only execute the 
 * original function after the delay has passed without the new function being called again."
 */

// --- STARTING BOILERPLATE (Give this to candidate) ---
function debounce(fn, delay) {
  // Your code here...
}

// Example usage:
const logMessage = debounce(() => console.log("Fetched!"), 500);
// logMessage();
// logMessage();
// logMessage(); // Should only log "Fetched!" once, after 500ms.


// --- EXPECTED SOLUTION (For Interviewer Only) ---
/*
function debounce(fn, delay) {
  let timerId;
  return function (...args) {
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}
*/
