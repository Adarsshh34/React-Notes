In React, data flows one-way (parent → child).
So to send data from child to parent, we pass a function from the parent to the child and call it from the child with data.

1. Using Callback Function
Parent Component
function Parent() {
  const handleChildData = (dataFromChild) => {
    console.log("Data from child:", dataFromChild);
  };

  return (
    <>
      <Child sendData={handleChildData} />
    </>
  );
    
}
Child Component
function Child({ sendData }) {
  return (
    <button onClick={() => sendData("Hello Parent")}>
      Send Data
    </button>
  );
}
Parent defines a function
Parent passes it as a prop
Child calls the function with data
Parent receives and handles the data

2. Using State Lifting
(This is not a new method, but a design pattern.)

3. Useing Context Api (function is pass from parent to child, and child trigger function with data at any deeper nested component)
4. Using Redux (function is pass from parent to child, and child trigger function with data at any deeper nested component)


