# Phase 4: Architecture & System Design (30 mins)
**Goal:** Test their ability to design a complex backend system and handle edge cases.

## The Scenario Prompt:
> "We are building an API for a high-traffic E-commerce checkout system. 
> A user clicks 'Purchase' on a highly sought-after item (like a limited edition sneaker). 
> Walk me through the backend architecture for this endpoint using Laravel. How do you handle database race conditions, talking to a 3rd party payment gateway like Stripe, and sending the confirmation email?"

> 💡 **Interviewer Cheat Sheet:**
> - **Race Conditions:** Two people click "Purchase" at the exact same millisecond, but there is only 1 sneaker left in the database.
> - **3rd Party API:** Stripe might take 3 seconds to process the card, or Stripe might be down entirely.

---

## What to look for during their answer:

### 1. Handling Race Conditions
- **What they should do:** Use Database Transactions and Pessimistic Locking (`lockForUpdate()`) to reserve the inventory.
> 💡 **Interviewer Cheat Sheet:** A good senior engineer knows that without a "Lock", two users will both buy the 1 remaining item. `lockForUpdate()` tells the database "Freeze this row so nobody else can touch it until this transaction is done."

### 2. External API Resilience
- **What they should do:** Never trust the external API. They should wrap the Stripe call in a try/catch, log failures, and ideally use Idempotency keys so the user isn't charged twice if they click the button twice.
> 💡 **Interviewer Cheat Sheet:** **Idempotency** means no matter how many times you send the same request, the result (charging the card) only happens once.

### 3. Background Processing
- **What they should do:** Queue the confirmation email and analytics tracking.
> 💡 **Interviewer Cheat Sheet:** They shouldn't make the user wait while the server talks to the email provider (like Sendgrid). Once the payment clears, send the email task to a background Queue.
