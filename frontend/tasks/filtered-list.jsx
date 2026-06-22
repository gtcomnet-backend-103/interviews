/**
 * LIVE CODING TASK: Filtered List (React)
 * 
 * THE PROMPT (Share with candidate):
 * "Below is a hardcoded array of users. Build a simple component that renders this list. 
 * Add a text input at the top. As the user types into the input, the list should instantly 
 * filter down to only show users whose name matches the search text."
 */

import React, { useState } from 'react';

// --- STARTING BOILERPLATE (Give this to candidate) ---
const USERS = [
  { id: 1, name: 'Alice', role: 'Engineer' },
  { id: 2, name: 'Bob', role: 'Designer' },
  { id: 3, name: 'Charlie', role: 'Product Manager' },
  { id: 4, name: 'David', role: 'Engineer' },
];

export default function App() {
  return (
    <div>
      {/* Your input and list code here */}
    </div>
  );
}


// --- EXPECTED SOLUTION (For Interviewer Only) ---
/*
export default function App() {
  const [searchTerm, setSearchTerm] = useState('');

  // CORRECT: Calculating derived state on the fly. 
  // TRAP: Do NOT use useEffect to set a second piece of state for the filtered array.
  const filteredUsers = USERS.filter(user => 
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <input 
        type="text" 
        value={searchTerm} 
        onChange={(e) => setSearchTerm(e.target.value)} 
        placeholder="Search users..." 
      />
      <ul>
        {filteredUsers.map(user => (
          <li key={user.id}>{user.name} - {user.role}</li>
        ))}
      </ul>
    </div>
  );
}
*/
