useMemo is a React Hook that memoizes (caches) the result of a function so that it recomputes only when its dependencies change.
It helps optimize performance by avoiding expensive recalculations on every render.

When to Use useMemo
Expensive calculations (factorial, large arrays, filtering, sorting)
Derived data from props/state that shouldn’t recalc on every render
Avoid re-rendering child components with referential equality checks (React.memo + memoized props

import React from 'react';
import { useState ,useMemo} from 'react';

export function App(props) {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState('');

  const expensiveCalculation = (num) => {
    console.log('Calculating...',num);
    let total = 0;
    for (let i = 0; i < 100; i++) {
      total += i;
    }
    return total + num;
  };

   const result = useMemo(() => expensiveCalculation(count), [count]);
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

// now even if we type of the input expensivecalculation is not getting re run
// const result = useMemo(() => expensiveCalculation(count), [count]);

// by adding above line it will make sure to run expensivecalculation only when [count] state changed.
