# Phase 4: Architecture & System Design (30 mins)
**Goal:** Test their ability to design a complex frontend application without writing heavy code. 

## The Scenario Prompt:
> "Walk me through how you would architect the frontend for a real-time admin dashboard. It includes heavy data tables with pagination, live-updating charts, and complex multi-step forms. 
> 
> I don't need you to write the code; I want to hear how you would design the component structure, manage the state, and keep the application fast."

> 💡 **Interviewer Cheat Sheet:**
> - **Admin Dashboard:** A complex, heavy website used by internal staff.
> - **Real-time / Live-updating:** The data changes instantly (like a stock ticker) without the user refreshing the page.
> - **Pagination:** Splitting data into pages (Page 1, 2, 3) instead of loading 10,000 items at once.

---

## What to look for during their answer:

### 1. Component Architecture & Design
- **What they should do:** Break the UI down into reusable, dumb (presentation) components and smart (container) components.
> 💡 **Interviewer Cheat Sheet:** 
> - A good engineer treats components like LEGO blocks. 
> - They will separate the "look" of the button (dumb component) from the "logic" of what the button does when clicked (smart component). This makes the code highly reusable.

### 2. State & API Management
- **What they should do:** Suggest a server-state library (like TanStack React Query) for fetching/caching data, rather than building complex Redux/Vuex flows manually.
> 💡 **Interviewer Cheat Sheet:** 
> - **Data Fetching:** Good engineers don't manually write code to load data and handle loading spinners anymore. They use modern tools (like React Query) that automatically cache the data, show spinners, and handle errors behind the scenes.

### 3. Performance Optimization
- **What they should do:** Mention "Virtualization" or "Windowing" for the heavy data tables, and "Lazy Loading" for the charts.
> 💡 **Interviewer Cheat Sheet:** 
> - **Virtualization:** If a table has 10,000 rows, the browser will crash if it tries to draw them all. Virtualization means the app only draws the 20 rows currently visible on the screen, instantly drawing new ones as the user scrolls.
> - **Lazy Loading:** Not downloading the code for the heavy Charts until the user actually navigates to the Chart page.
