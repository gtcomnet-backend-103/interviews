# Phase 3: React & Vue Knowledge (25-30 mins)
**Goal:** Assess how they handle state, lifecycles, and reactivity in modern frameworks.

## 1. Live Coding Task: The Filtered List
*React Code: [tasks/filtered-list.jsx](file:///home/office/Documents/Interview/frontend/tasks/filtered-list.jsx)* | *Vue Code: [tasks/filtered-list.vue](file:///home/office/Documents/Interview/frontend/tasks/filtered-list.vue)*
*Tests derived state and reactivity. Watch out for the trap of duplicating state variables.*

## 2. Live Coding Task: Custom useFetch Hook/Composable
*React Code: [tasks/use-fetch.jsx](file:///home/office/Documents/Interview/frontend/tasks/use-fetch.jsx)* | *Vue Code: [tasks/use-fetch.vue](file:///home/office/Documents/Interview/frontend/tasks/use-fetch.vue)*
*Tests component lifecycles (mounting/unmounting), state management, and async operations.*

## 3. Live Coding Task: Click Outside Modal
*React Code: [tasks/modal-click-outside.jsx](file:///home/office/Documents/Interview/frontend/tasks/modal-click-outside.jsx)* | *Vue Code: [tasks/modal-click-outside.vue](file:///home/office/Documents/Interview/frontend/tasks/modal-click-outside.vue)*
*Tests DOM references (`useRef` or `ref`), native event listeners (`addEventListener`), and cleanup on unmount.*

## 4. State Management Decisions (Conversational)
- *Question:* "When deciding how to manage state, when would you use local component state versus a global store like Zustand, Redux, or Vuex?"
  - *Good signal:* Uses local state for UI toggles (dropdowns, modals) and global state for shared data (user sessions). Warns against putting *everything* in global state.

> 💡 **Interviewer Cheat Sheet:**
> - **Local State:** Memory that belongs only to one specific button on the screen.
> - **Global State:** Memory that the entire website shares. Bad engineers dump everything into Global State, making the app slow and hard to debug.

## 5. Under the Hood (Conversational)
- *Question:* "At a high level, how does React's Virtual DOM differ from how Vue tracks reactivity?"
  - *Good signal:* React re-renders the component tree and compares it (diffing). Vue uses proxies to track exact dependencies, so it knows precisely which component needs to update without diffing everything.

> 💡 **Interviewer Cheat Sheet:**
> - **Virtual DOM / Proxies:** This is how frameworks update the screen fast. React compares a lightweight copy of the whole screen to find changes. Vue is more like a sniper; it tracks the exact piece of data that changed and only updates that one specific spot.
