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
