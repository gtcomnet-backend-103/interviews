# Phase 2: Core PHP Fundamentals (20-25 mins)
**Goal:** Test their vanilla PHP, Object-Oriented Programming (OOP), and security knowledge *before* relying on Laravel magic.

## 1. Live Coding Task: Array Manipulation
*Code Reference: [tasks/array-manipulation.php](file:///home/office/Documents/Interview/backend/tasks/array-manipulation.php)*
*Provide the candidate with the starting boilerplate. Tests basic syntax and use of native array functions.*

## 2. Live Coding Task: OOP Interfaces
*Code Reference: [tasks/oop-interface.php](file:///home/office/Documents/Interview/backend/tasks/oop-interface.php)*
*Provide the candidate with the starting boilerplate. Tests OOP design patterns and type-hinting.*

## 3. Live Coding Task: Spot the Bug (SQL Injection)
*Code Reference: [tasks/sql-injection-bug.php](file:///home/office/Documents/Interview/backend/tasks/sql-injection-bug.php)*
*Provide the candidate with the boilerplate snippet. Tests security awareness and database fundamentals.*

## 4. Traits vs Interfaces (Conversational)
- *Question:* "In PHP, what is the difference between a `Trait` and an `Interface`, and when would you use each?"
  - *Good signal:* Interfaces dictate *what* a class must do (a contract). Traits dictate *how* to do it (code reuse).

> 💡 **Interviewer Cheat Sheet:**
> - **Interface:** A blueprint. It forces a class to have certain methods, but doesn't write the code for them.
> - **Trait:** A piece of copy-pasteable code. If 5 different classes all need the exact same `logError()` function, you put it in a Trait and "use" it in those classes to avoid repeating yourself.

## 5. Dependency Injection (Conversational)
- *Question:* "What is Dependency Injection in PHP? Can you explain it simply?"
  - *Good signal:* Explains that instead of a class creating its own tools (e.g., `new Database()`), you pass the tool into the class via the constructor. This makes testing and mocking much easier.

> 💡 **Interviewer Cheat Sheet:**
> - **Dependency Injection:** Imagine you are a Chef. Instead of you having to forge your own knives and grow your own vegetables inside the kitchen (hardcoded dependencies), someone hands you the knives and veggies when you walk in (injection). This way, if we need to swap out a real knife for a plastic toy knife (for testing), we can do it easily.
