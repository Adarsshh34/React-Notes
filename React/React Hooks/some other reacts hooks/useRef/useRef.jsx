useRef is a React Hook that returns a mutable object:

const ref = useRef(initialValue);
    ref.current holds the value
    The value persists across renders
    Updating ref.current does NOT trigger a re-render

useRef -> 
  DOM Access with useRef
  Persisting Values Without Re-render

import React from 'react';
import { useEffect ,useRef } from 'react';

export function App(props) {

  const a = useRef(0);

  const handleclick = ()=>{
    a.current = a.current + 1;
    console.log(a.current);
  }

  useEffect(()=>{
    console.log("component get re-render");
  })
  
  return (
    <div className='App'>
      <div>
       
        
        <button onClick={handleclick}>Increment Count </button>
      </div>
    </div>
  );
}

// Log to console

console.log('Hello console')

