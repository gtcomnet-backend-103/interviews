<?php
/**
 * LIVE CODING TASK 2: OOP Interfaces
 * 
 * THE PROMPT:
 * "We need to process payments using different gateways (Stripe, PayPal). 
 * Create a simple interface called `PaymentGateway` with a `charge` method. 
 * Then create a `StripeGateway` class that implements this interface."
 */

// --- STARTING BOILERPLATE ---
// Your code here...


// --- EXPECTED SOLUTION (For Interviewer Only) ---
/*
interface PaymentGateway {
    // Good signal: Uses type hinting for arguments and return types
    public function charge(float $amount, string $token): bool;
}

class StripeGateway implements PaymentGateway {
    public function charge(float $amount, string $token): bool {
        // Mock implementation
        echo "Charging $amount via Stripe using token $token";
        return true;
    }
}
*/
