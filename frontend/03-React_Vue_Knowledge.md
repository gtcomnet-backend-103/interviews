# Phase 3: React & Vue Knowledge (15-20 mins)
**Goal:** Assess how they handle state, lifecycles, and reactivity in modern frameworks.

## 1. Live Coding Task: The Filtered List
*React Code Reference: [tasks/filtered-list.jsx](file:///home/office/Documents/Interview/frontend/tasks/filtered-list.jsx)*
*Vue Code Reference: [tasks/filtered-list.vue](file:///home/office/Documents/Interview/frontend/tasks/filtered-list.vue)*

*Give the candidate the starting boilerplate from the relevant file above (using CodeSandbox or similar).*

**The Prompt:**
> "I am giving you a hardcoded array of 5 user objects `{ id, name, role }`. 
> I want you to build a simple component that renders this list. Then, add a text input at the top. As I type into the text input, the list of users should instantly filter down to only show users whose name matches my search text."

**What to look for:**
- **State Management:** Do they correctly set up state for the "Search Term"? 
- **Derived State:** *Crucial Signal:* Do they create a second piece of state for the "Filtered Users", or do they correctly calculate the filtered users on the fly during the render? (Calculating on the fly is the correct, performant way).
- **Reactivity:** Does the list update instantly and correctly when typing and backspacing?

> 💡 **Interviewer Cheat Sheet:**
> - **The Trap:** A bad engineer will create two variables: one for the Search Text, and one for the Filtered List, and then use a "Watcher" or "useEffect" to update the list whenever the text changes. This causes slow, double-renders. 
> - **The Right Way:** A good engineer only creates one variable (Search Text), and simply filters the hardcoded array directly in the HTML/JSX rendering logic.

## 2. State Management Decisions
- *Question:* "When deciding how to manage state, when would you use local component state versus a global store like Zustand, Redux, or Vuex?"
  - *Good signal:* Uses local state for UI toggles (dropdowns, modals) and global state for shared data (user sessions). Warns against putting *everything* in global state.

> 💡 **Interviewer Cheat Sheet:**
> - **Local State:** Memory that belongs only to one specific button on the screen.
> - **Global State:** Memory that the entire website shares. Bad engineers dump everything into Global State, making the app slow and hard to debug.

## 3. Under the Hood
- *Question:* "At a high level, how does React's Virtual DOM differ from how Vue tracks reactivity?"
  - *Good signal:* React re-renders the component tree and compares it (diffing). Vue uses proxies to track exact dependencies, so it knows precisely which component needs to update without diffing everything.

> 💡 **Interviewer Cheat Sheet:**
> - **Virtual DOM / Proxies:** This is how frameworks update the screen fast. React compares a lightweight copy of the whole screen to find changes. Vue is more like a sniper; it tracks the exact piece of data that changed and only updates that one specific spot.
