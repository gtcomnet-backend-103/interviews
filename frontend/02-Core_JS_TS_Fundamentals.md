# Phase 2: Core JS & TS Fundamentals (20-25 mins)
**Goal:** Test their vanilla JavaScript and TypeScript knowledge *before* relying on frameworks.

## 1. Live Coding Task: The Debounce Function
*Code Reference: [tasks/debounce.js](file:///home/office/Documents/Interview/frontend/tasks/debounce.js)*
*Provide the candidate with the starting boilerplate from the file above. Tests closures, scope, and timeouts.*

## 2. Live Coding Task: Fetch with Retry
*Code Reference: [tasks/fetch-retry.js](file:///home/office/Documents/Interview/frontend/tasks/fetch-retry.js)*
*Provide the candidate with the starting boilerplate. Tests Promises, async/await, and error handling.*

## 3. Live Coding Task: Array Group By
*Code Reference: [tasks/array-groupby.js](file:///home/office/Documents/Interview/frontend/tasks/array-groupby.js)*
*Provide the candidate with the starting boilerplate. Tests array manipulation (`reduce`) and object structuring.*

## 4. JavaScript Execution (Conversational)
- *Question:* "Can you explain what the Event Loop is in JavaScript and how it handles asynchronous code like an API call?"
  - *Good signal:* Mentions the Call Stack, Web APIs, and the Callback/Task Queue.

> 💡 **Interviewer Cheat Sheet:**
> - **Event Loop:** JavaScript can only do one thing at a time. If it waits for an API to download data, the website freezes. The Event Loop is the traffic cop that pushes slow tasks to the background and brings them back when they finish, keeping the website smooth.

## 5. TypeScript Practical (Conversational)
- *Question:* "In TypeScript, what is the practical difference between an `interface` and a `type` alias? Which do you prefer?"
  - *Good signal:* Knows they are mostly interchangeable now, but `interfaces` are better for declaring object shapes, while `types` are better for unions (e.g., `type Status = 'success' | 'error'`).
