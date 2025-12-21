import React from 'react';
import { useState } from 'react';

export function App(props) {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState('');

  const expensiveCalculation = (num) => {
    console.log('Calculating...');
    let total = 0;
    for (let i = 0; i < 100; i++) {
      total += i;
    }
    return total + num;
  };

  const result = expensiveCalculation(count);
  return (
    <div className='App'>
      <h1>Hello React</h1>
      <div>
        <input value={input} onChange={(e) => setInput(e.target.value)} />
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <p>Result: {result}</p>
      </div>
    </div>
  );
}

// Log to console
console.log('Hello console')


// Even when you type in the input which does not affect count it rerun expensivecalculation again
// UseMemo is applied over method level

