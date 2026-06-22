/**
 * LIVE CODING TASK 3: Array Group By
 * 
 * THE PROMPT:
 * "Write a function `groupBy` that takes an array of objects and a key (string). 
 * It should group the objects by the value of that key and return an object where 
 * the keys are the unique values, and the values are arrays of matching objects."
 */

// --- STARTING BOILERPLATE ---
const people = [
  { name: "Alice", role: "admin" },
  { name: "Bob", role: "user" },
  { name: "Charlie", role: "admin" },
];

function groupBy(array, key) {
  // Your code here...
}

// Example output for groupBy(people, 'role'):
// {
//   admin: [{ name: "Alice", role: "admin" }, { name: "Charlie", role: "admin" }],
//   user: [{ name: "Bob", role: "user" }]
// }


// --- EXPECTED SOLUTION (For Interviewer Only) ---
/*
function groupBy(array, key) {
  return array.reduce((result, currentItem) => {
    const groupValue = currentItem[key];
    
    // If the group doesn't exist yet, create it as an empty array
    if (!result[groupValue]) {
      result[groupValue] = [];
    }
    
    // Push the item into the group
    result[groupValue].push(currentItem);
    
    return result;
  }, {});
}
*/
