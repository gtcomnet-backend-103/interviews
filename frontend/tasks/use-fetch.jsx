/**
 * LIVE CODING TASK 2: Custom useFetch Hook (React)
 * 
 * THE PROMPT:
 * "Write a custom React hook called `useFetch` that takes a URL. When the component 
 * mounts, it should fetch the data from the URL. It should return an object containing: 
 * `{ data, loading, error }` so the component can render different states."
 */

import { useState, useEffect } from 'react';

// --- STARTING BOILERPLATE ---
export function useFetch(url) {
  // Your code here...
}

// Example Usage:
// const { data, loading, error } = useFetch('https://api.example.com/users');


// --- EXPECTED SOLUTION (For Interviewer Only) ---
/*
export function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true; // Bonus points if they handle race conditions/unmounting
    setLoading(true);

    fetch(url)
      .then(res => {
        if (!res.ok) throw new Error('Network response was not ok');
        return res.json();
      })
      .then(json => {
        if (isMounted) {
          setData(json);
          setError(null);
        }
      })
      .catch(err => {
        if (isMounted) setError(err.message);
      })
      .finally(() => {
        if (isMounted) setLoading(false);
      });

    return () => {
      isMounted = false; // Cleanup function to prevent setting state on unmounted component
    };
  }, [url]);

  return { data, loading, error };
}
*/
