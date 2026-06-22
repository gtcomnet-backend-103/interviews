<?php
/**
 * LIVE CODING TASK 1: PHP Array Manipulation
 * 
 * THE PROMPT:
 * "You have an array of order totals. Write a function that calculates the total sum of 
 * all orders, but ONLY for orders that are greater than $50. Try to use built-in PHP 
 * array functions if possible."
 */

// --- STARTING BOILERPLATE ---
$orders = [12.50, 60.00, 30.25, 105.00, 45.00, 80.00];

function calculateHighValueTotal(array $orders): float {
    // Your code here...
    return 0.0;
}


// --- EXPECTED SOLUTION (For Interviewer Only) ---
/*
function calculateHighValueTotal(array $orders): float {
    // Good engineers will use array_filter and array_sum, or a clean foreach.
    $highValueOrders = array_filter($orders, function($amount) {
        return $amount > 50;
    });
    
    return array_sum($highValueOrders);
    
    // Alternative (also perfectly fine):
    // $total = 0;
    // foreach ($orders as $amount) {
    //     if ($amount > 50) $total += $amount;
    // }
    // return $total;
}
*/
