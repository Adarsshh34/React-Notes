import React from 'react';
import { useState ,useMemo} from 'react';

const Button = React.memo(({ handleClick }) => {
  console.log('Button rendered');
  return <button onClick={handleClick}>Click Me !</button>;
});

export function App(props) {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    console.log('Button clicked');
  };

  
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

// Even when you click "Increment Count," the Button component re-renders because handleClick gets recreated on each render.