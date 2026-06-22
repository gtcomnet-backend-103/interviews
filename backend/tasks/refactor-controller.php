<?php
/**
 * LIVE CODING TASK 2: Refactor Fat Controller
 * 
 * THE PROMPT:
 * "This Controller method creates a user, sends a welcome email, and subscribes them to a newsletter. 
 * How would you refactor this in a Laravel application to keep the Controller clean and testable?"
 */

// --- STARTING BOILERPLATE ---
class RegisterController extends Controller
{
    public function store(Request $request)
    {
        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]);

        Mail::to($user)->send(new WelcomeEmail($user));
        Newsletter::subscribe($user->email);

        return response()->json($user);
    }
}


// --- EXPECTED SOLUTION (For Interviewer Only) ---
/*
// WHAT TO LOOK FOR:
// They should mention extracting the logic into an Action class, a Service class, or using Events/Listeners.

// Example Fix (Using an Action or Service class):
class RegisterController extends Controller
{
    public function store(Request $request, RegisterUserService $service)
    {
        // Controller is now clean and just handles HTTP
        $user = $service->register($request->validated());
        return response()->json($user);
    }
}

// Or Using Events:
class RegisterController extends Controller
{
    public function store(Request $request)
    {
        $user = User::create($request->validated());
        
        // Let background listeners handle the email and newsletter
        event(new UserRegistered($user)); 
        
        return response()->json($user);
    }
}
*/
