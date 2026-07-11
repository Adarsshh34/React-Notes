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

# React Component
- Class Based Component
- Functional Component

# React Functional Component : a function which returns jsx is called functional component
const HeaderComponent = ()=>{
  return <h1> Hello World</h1>;
}

# Component Composition -> One component inside another
const HeadingComposition = ()=>{
  <div id="conatiner">
    <Title/>                      ---> component inside component
    <h1 className="header">Hello World</h1>
  </div>
);

# If we have to write JS inside JSX
we need to write it inside {}
e.g. <h1>{100+200}</h1>
e.g. <div>{console.log("heloo")}</div>

# Cross-Side Scripting
{} since we run js inside this brackets if we are having code like
const data = api.getData();
<div>{data}</div>
Suppose this api is sending malicious data it can hack user system
But Browser or JSX won't blindly run it, it will sanitize data if something is bad in the code then it skips it
so no need to take care of cross side scripting attack

# This things are same
const Title =()=>{
  return (
    <h1>Hello World</h1>
    );
}
1. <Title/>
2. <Title></Title>
3. {Title()}





