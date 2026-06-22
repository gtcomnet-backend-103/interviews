<?php
/**
 * LIVE CODING TASK 3: Laravel API Responses
 * 
 * THE PROMPT:
 * "We are building an API. When we return `$user` from our controller, it includes 
 * sensitive fields like `password` and `remember_token`, and the date formatting is ugly. 
 * Without modifying the User model directly, what is the 'Laravel way' to format this data 
 * specifically for an API response?"
 */

// --- STARTING BOILERPLATE ---
class UserController extends Controller
{
    public function show(User $user)
    {
        // Currently returns everything!
        return response()->json($user);
    }
}


// --- EXPECTED SOLUTION (For Interviewer Only) ---
/*
// WHAT TO LOOK FOR:
// They should mention Laravel API Resources (or Fractal/Transformers).

class UserController extends Controller
{
    public function show(User $user)
    {
        // Return a standardized Resource
        return new UserResource($user);
    }
}

// And they should describe creating a resource class:
class UserResource extends JsonResource
{
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'email' => $this->email,
            'joined_at' => $this->created_at->format('Y-m-d'),
            // Notice: password is intentionally left out
        ];
    }
}
*/
