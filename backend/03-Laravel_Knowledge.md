# Phase 3: Laravel Knowledge (25-30 mins)
**Goal:** Assess how they use the Laravel framework, focusing on Eloquent performance, clean controllers, and API design.

## 1. Live Coding Task: Eloquent N+1
*Code Reference: [tasks/eloquent-n-plus-one.php](file:///home/office/Documents/Interview/backend/tasks/eloquent-n-plus-one.php)*
*Tests their understanding of eager loading and ORM performance pitfalls.*

## 2. Live Coding Task: Refactor Fat Controller
*Code Reference: [tasks/refactor-controller.php](file:///home/office/Documents/Interview/backend/tasks/refactor-controller.php)*
*Tests architectural design (Services, Actions, or Events) to keep controllers clean.*

## 3. Live Coding Task: API Resource
*Code Reference: [tasks/api-resource.php](file:///home/office/Documents/Interview/backend/tasks/api-resource.php)*
*Tests their knowledge of returning clean, standardized JSON data without leaking sensitive model fields.*

## 4. Service Container (Conversational)
- *Question:* "What is the Laravel Service Container and how does it relate to Dependency Injection?"
  - *Good signal:* Understands that it's a registry that manages class dependencies and performs automatic injection (autowiring).

> 💡 **Interviewer Cheat Sheet:**
> - **Service Container:** It is the "brain" of Laravel. When a controller asks for a `PaymentGateway`, the Service Container automatically figures out how to build it and hands it to the controller.

## 5. Queues and Jobs (Conversational)
- *Question:* "If an API endpoint needs to generate a PDF report that takes 10 seconds, how do you handle that in Laravel?"
  - *Good signal:* Instantly mentions pushing the task to a Queue (using Jobs) and returning a 202 Accepted response to the user immediately.

> 💡 **Interviewer Cheat Sheet:**
> - **Queues:** We never want the user staring at a loading spinner for 10 seconds. We dispatch a "Job" to a background Queue. A separate background worker builds the PDF, while the user immediately sees a "Your report is generating!" message.
