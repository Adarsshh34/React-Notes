My Definition -> Lifting state up is a React pattern where state a single state is needed to read/update by 2 or more child 
then state is created in  closest parent where both child can access the state.
GPT -> Lifting state up is a React pattern where state is moved from a child component to its closest 
common parent so that multiple components can share and stay in sync with the same data.

Need?
Two or more child components need the same data, or
One child needs to update data that another child uses

Without Lifting State Up (Problem)
function ChildA() {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(count + 1)}>+</button>;
}

function ChildB() {
  return <p>Count: ???</p>;
}
❌ ChildB cannot access count from ChildA

Correct Approach: Lifting State Up
import { useState } from "react";
import ChildA from "./ChildA";
import ChildB from "./ChildB";

function Parent() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <ChildA count={count} setCount={setCount} />
      <ChildB count={count} />
    </div>
  );
}

export default Parent;

🔹 ChildA (updates state)
function ChildA({ count, setCount }) {
  return (
    <button onClick={() => setCount(count + 1)}>
      Increment
    </button>
  );
}

🔹 ChildB (reads state)
function ChildB({ count }) {
  return <p>Count: {count}</p>;
}

🔍 How It Works
State (count) is moved to the Parent
Parent passes:
count to both children
setCount to the child that updates it
Both children stay in sync
