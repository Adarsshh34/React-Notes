Controlled Components

👉 Form data is controlled by React state
How it works
Input value is stored in useState
Input value changes via onChange
React is the single source of truth

import { useState } from "react";

function ControlledForm() {
  const [name, setName] = useState("");

  return (
    <input
      value={name}
      onChange={(e) => setName(e.target.value)}
    />
  );
}

2️⃣ Uncontrolled Components

👉 Form data is handled by the DOM itself
How it works
Use ref to access input value
No state updates on every keystroke

Example
import { useRef } from "react";

function UncontrolledForm() {
  const inputRef = useRef();

  const handleSubmit = () => {
    console.log(inputRef.current.value);
  };

  return (
    <>
      <input ref={inputRef} />
      <button onClick={handleSubmit}>Submit</button>
    </>
  );
}
