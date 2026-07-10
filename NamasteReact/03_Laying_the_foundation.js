JSX and React

JSX and React is different 
we can make React application without using JSX by using React.createElement()
JSX - is not HTML inside Javascript, it is HTML-like or XML-like syntax

Creating React element using React 
const heading = React.createElement(
  "h1",
  {id:"heading"},
  "Hello World"
);

Creating React Element using JSX
const heading = <h1 id="heading">Hello World</h1>

# Below code is not a valid Javascript then how come browser understands it
const heading = <h1 id="heading">Hello World</h1>
JSX (code is transpiled before it reaches the JS Engine)
transpiling is done by Parcel 
Parcel gives this reponsibility to Babel package
Babel -> is a JS compiler, it's job is to convert JSX into React Code
JSX => React Element => HTML
Some browser didn't understand ES6 code so Babel convert it into Browser compatbile code
