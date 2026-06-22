<?php
/**
 * LIVE CODING TASK 3: Spot the Bug (Security)
 * 
 * THE PROMPT:
 * "Look at this snippet of native PHP code. Can you spot the major security flaw, 
 * and how would you fix it?"
 */

// --- STARTING BOILERPLATE ---
function getUser($pdo, $email) {
    // Candidate needs to spot the bug here
    $query = "SELECT * FROM users WHERE email = '" . $email . "'";
    $stmt = $pdo->query($query);
    return $stmt->fetch();
}


// --- EXPECTED SOLUTION (For Interviewer Only) ---
/*
// THE BUG: SQL Injection vulnerability. Concatenating user input directly into a query.
// THE FIX: Use prepared statements with parameter binding.

function getUser($pdo, $email) {
    $stmt = $pdo->prepare("SELECT * FROM users WHERE email = :email");
    $stmt->execute(['email' => $email]);
    return $stmt->fetch();
}
*/
