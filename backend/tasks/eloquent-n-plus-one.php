<?php
/**
 * LIVE CODING TASK 1: Laravel Eloquent (N+1 Problem)
 * 
 * THE PROMPT:
 * "You have a Controller that fetches the latest 50 Posts and displays their Author's name. 
 * However, this page is making 51 database queries and slowing down the site. 
 * How do you fix the code below to make it run in only 2 queries?"
 */

// --- STARTING BOILERPLATE ---
class PostController extends Controller
{
    public function index()
    {
        // Bug: This causes an N+1 query issue when looping through $posts->author
        $posts = Post::latest()->take(50)->get();
        
        return view('posts.index', compact('posts'));
    }
}


// --- EXPECTED SOLUTION (For Interviewer Only) ---
/*
class PostController extends Controller
{
    public function index()
    {
        // THE FIX: Use Eager Loading by adding `with('author')`
        $posts = Post::with('author')->latest()->take(50)->get();
        
        return view('posts.index', compact('posts'));
    }
}
*/
