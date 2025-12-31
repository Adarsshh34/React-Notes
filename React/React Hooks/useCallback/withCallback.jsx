useCallback prevents an unnecessary re-render of a memoized child component by keeping the same function reference across renders.
  
import React from 'react';
import { useState ,useCallback } from 'react';

const Button = React.memo(({ handleClick }) => {
  console.log('Button rendered');
  return <button onClick={handleClick}>Click Me !</button>;
});

export function App(props) {
  const [count, setCount] = useState(0);

    const handleClick = useCallback(() => {
    console.log('Button clicked');
  }, []);

  
  return (
    <div className='App'>
      <div>
        <p>Count: {count}</p>
        <Button handleClick={handleClick} />
        <button onClick={() => setCount(count + 1)}>Increment Count</button>
      </div>
    </div>
  );
}

// Log to console
console.log('Hello console')

// Now, handleClick remains the same instance on each render, so Button doesn’t re-render unnecessarily.

