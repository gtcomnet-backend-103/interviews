# Backend Engineer Interview Guide (PHP/Laravel)

## Interview Overview
- **Duration**: 75-90 minutes
- **Format**: 1-on-1 Conversational System Design & Practical Live Tasks
- **Core Stack Focus**: PHP 8+, Laravel, MySQL, REST APIs, OOP Architecture

---

## Interview Phases
The interview is split into the following sections. It includes practical live tasks to test coding ability, followed by conversational architecture questions.

1. `01-Introduction.md`
2. `02-Core_PHP_Fundamentals.md` (3 Live Tasks)
3. `03-Laravel_Knowledge.md` (3 Live Tasks)
4. `04-Architecture_and_Design.md` (System Design Scenario)
5. `05-Cultural_Fit_and_QA.md`

---

## Scoring Rubric

- **Junior Level (Red Flags):** Writes messy procedural PHP. Doesn't know what N+1 queries are. Dumps all logic (emails, 3rd party APIs, database updates) directly into a massive controller.
- **Mid-Level (Passing):** Solves the array/OOP tasks easily. Knows to use Eager Loading in Laravel. Understands queues but might miss locking rows (`lockForUpdate`) during the checkout architecture scenario.
- **Senior Level (Strong Hire):** Understands the Service Container deeply. Extracts controller logic perfectly into Services/Actions. Proactively suggests database transaction locking and idempotency for external APIs during the architecture phase.
