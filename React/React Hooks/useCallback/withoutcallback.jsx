without using callback
function App() {
  const [count, setCount] = React.useState(0);

  const sayHello = () => {
    console.log("Hello");
  };

  return (
    <>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <Child sayHello={sayHello} />
    </>
  );
}

const Child = React.memo(({ sayHello }) => {
  console.log("Child rendered");
  return <button onClick={sayHello}>Say Hello</button>;
});

Note : sayHello method is send as a prop to child component
What happens when you click Increase
count changes
App re-renders
sayHello is created again
React thinks prop changed
Child rendered ❌

Even though Child doesn’t use count.



