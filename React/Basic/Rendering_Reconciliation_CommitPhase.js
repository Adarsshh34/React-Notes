1️⃣ Render (Rendering phase)
  React calls your component functions
  Calculates what the UI should look like
  Creates a new Virtual DOM tree
  Note : 
    Pure & side-effect free
    Can be paused, restarted, or aborted (Concurrent Mode)
    No DOM updates here
2️⃣ Reconciliation (Diffing phase)
  React compares old Virtual DOM with new Virtual DOM
  Finds minimum changes
  Uses keys to optimize list updates
  Note : 
    Happens after rendering
    Determines what needs to update
    Still no real DOM updates
3️⃣ Commit phase
  React applies changes to the real DOM
  Runs side effects
  Browser paints UI
  Note : 
    DOM updates
    ✔ useEffect cleanup
    ✔ useEffect execution
    ✔ componentDidMount / componentDidUpdate
