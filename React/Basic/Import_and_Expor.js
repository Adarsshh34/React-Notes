Default Export
  Only one per file
  Import name is flexible
  Commonly used for main component of a file

  function Counter() {
    return <h2>Counter</h2>;
  }
  export default Counter;
  
  ✅ You can rename it freely:
  import Counter from "./Counter";
  import MyCounter from "./Counter";

Named Export (Direct Export)
  Can have many exports
  Import name must match exactly
  Encourages clear API
  // mathUtils.js
  export const add = (a, b) => a + b;
  export const subtract = (a, b) => a - b;
  import with same name
  import { add, subtract } from "./mathUtils";
  ✅ Import with alias:
  import { add as sum } from "./mathUtils";

Note : Default import ko bina curle bracket import karte hai and Named Imports ko with currly brackets.
