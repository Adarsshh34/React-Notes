import React from 'react';
import { useEffect ,useRef, useState } from 'react';



export function App(props) {

  const [count, setCount] = useState(0);
  const prevCountRef = useRef();

  useEffect(() => {
    console.log("first");
    prevCountRef.current = count;  
  }, [count]);

  useEffect(()=>{
    console.log("re rendering");
  })
  
  return (
    <div className='App'>
      <div>
      <p>Current: {count}</p>
      <p>Previous: {prevCountRef.current}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
    </div>
  );
}

/*
Rerendering starts from line number 7 where the previous state of the count is stored which is not yet
updated to +1 then "re rendering" is print 
further all jsx tag like div are renderers and count value is get incremented to +1
 */
