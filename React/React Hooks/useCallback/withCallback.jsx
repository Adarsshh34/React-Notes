useCallback prevents an unnecessary re-render of a memoized child component by keeping the same function reference across renders.
  
function App() {
  const [count, setCount] = React.useState(0);

  const sayHello = React.useCallback(() => {
    console.log("Hello");
  }, []);

  return (
    <>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <Child sayHello={sayHello} />
    </>
  );
}

👉 Now when you click Increase:
count changes
App re-renders
sayHello stays the same function
Child props didn’t change
Child does NOT render ✅


