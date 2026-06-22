/**
 * LIVE CODING TASK 3: Click Outside Modal (React)
 * 
 * THE PROMPT:
 * "Build a Modal component that takes an `isOpen` boolean and an `onClose` function. 
 * The modal should close ONLY when the user clicks on the dark overlay (outside the modal box). 
 * Clicking inside the white modal box should NOT close it."
 */

import React, { useRef, useEffect } from 'react';

// --- STARTING BOILERPLATE ---
export default function Modal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="overlay" style={{ background: 'rgba(0,0,0,0.5)', position: 'fixed', inset: 0 }}>
      <div className="modal-box" style={{ background: 'white', padding: 20, margin: '100px auto', width: 300 }}>
        <h1>Modal Content</h1>
        <p>Clicking this white box should not close me!</p>
      </div>
    </div>
  );
}


// --- EXPECTED SOLUTION (For Interviewer Only) ---
/*
export default function Modal({ isOpen, onClose }) {
  // A ref to target the white modal box
  const modalRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      // If the click is OUTSIDE the modalRef, call onClose
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleOutsideClick);
    }

    // Cleanup listener when closed or unmounted
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="overlay" style={{ background: 'rgba(0,0,0,0.5)', position: 'fixed', inset: 0 }}>
      <div ref={modalRef} className="modal-box" style={{ background: 'white', padding: 20, margin: '100px auto', width: 300 }}>
        <h1>Modal Content</h1>
        <p>Clicking this white box should not close me!</p>
      </div>
    </div>
  );
}
*/
