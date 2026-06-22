# Phase 2: Core JS & TS Fundamentals (15-20 mins)
**Goal:** Test their vanilla JavaScript and TypeScript knowledge *before* relying on frameworks.

## 1. Live Coding Task: The Debounce Function
*Code Reference: [tasks/debounce.js](file:///home/office/Documents/Interview/frontend/tasks/debounce.js)*

*Provide the candidate with the starting boilerplate from the file above (via CodeSandbox or chat) and ask them to write a debounce function.*

**The Prompt:**
> "Write a `debounce` function. It should take a function and a delay (in milliseconds) as arguments, and return a new function. This new function should only execute the original function after the delay has passed *without* the new function being called again."

**What to look for:**
- Do they understand how to use `setTimeout` and `clearTimeout`?
- Do they properly return a new function (demonstrating closures)?
- *Bonus:* Do they correctly handle the `this` context and `arguments`?

> 💡 **Interviewer Cheat Sheet:**
> - **Debounce:** A technique used to stop a function from firing too many times in a row. For example, if a user types rapidly in a search bar, we don't want to send an API request for every single letter. We want to wait until they stop typing for 500ms before sending the request.
> - **The Code:** The solution should involve a `timer` variable outside the returned function, and inside the returned function, it clears the timer and sets a new one.

## 2. JavaScript Execution
- *Question:* "Can you explain what the Event Loop is in JavaScript and how it handles asynchronous code like an API call?"
  - *Good signal:* Mentions the Call Stack, Web APIs, and the Callback/Task Queue.

> 💡 **Interviewer Cheat Sheet:**
> - **Event Loop:** JavaScript can only do one thing at a time. If it waits for an API to download data, the website freezes. The Event Loop is the traffic cop that pushes slow tasks to the background and brings them back when they finish, keeping the website smooth.

## 3. JavaScript Scope & Closures
- *Question:* "In plain terms, what is a closure in JavaScript? Where might you actually use one?"
  - *Good signal:* Explains that a function remembers the variables around it even after the outer function finishes. Uses cases like data privacy or debouncing (like they just built above).

> 💡 **Interviewer Cheat Sheet:**
> - **Closure:** Imagine a backpack. When a function is created, it packs up and remembers all the variables that were nearby. It’s used to create "private" variables that other code can't accidentally break.

## 4. TypeScript Practical
- *Question:* "In TypeScript, what is the practical difference between an `interface` and a `type` alias? Which do you prefer?"
  - *Good signal:* Knows they are mostly interchangeable now, but `interfaces` are better for declaring object shapes, while `types` are better for unions (e.g., `type Status = 'success' | 'error'`).
