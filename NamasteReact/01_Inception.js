what is CDN React

# crossorigin in script tag:
tells the browser how to handle Cross-Origin Resource Sharing (CORS) requests when fetching JavaScript 
files from a different domain, such as a Content Delivery Network (CDN).
By default, web browsers allow scripts from external domains to load and execute without strict CORS checks, 
    but they mask the error details to prevent data leaks. If a cross-origin script crashes, window error handlers like 
    window.onerror will only see a generic "Script error." instead of the exact line number, file name, or stack trace. 
    Applying the crossorigin attribute opts the script request into the official CORS workflow, unlocking complete error 
    reporting for easier debugging.

const heading = React.createElement("h1",{id:"heading"},"Hello World");
//                              type of tag, attribute of tag, content of tag

console.log(header) // it's a react object (it is not creating html it creates react object and whiling rending on dom it become html element using render method)
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

# Nested Element in React
/*
<div id="parent">
  <div id="children">
    <h1>Hello</h1>
  </div>
</div>
*/

const h1 = React.createElement("h1",{},"Hello");
const div1 = React.createElement("div",{id:"children"},h1);
const div2 = React.createElement("div",{id:"parent"},div1);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

OR
const parent = React.createElement("div",
                                   {id:"parent"},
                                   React.createElement("div",
                                                       {id:"children"},
                                                       React.createElement("h1",
                                                                           {},
                                                                           "Hello"
                                                                          )
                                                      ));
# if you have to give more then 1 children for any element, need to create [] array of children.
# To make it easy JSX helps.

<div id="root">Adarsh</div>
if root already has something then render will replace all the content of root and replace it with React.render() content

<div id="root">above Root</div>
<div id="root"></div>
<div id="root">Below root</div>
React will replace only content which is part of root rest every thing would render

Why React is library
beacause it can work in the small part of the page independetly
framework comes with all loads of thing it cannot be implemented in the small portion of the page
Framework will require you to create app itself whereas react can be used in your existing app well 
   (you can just inject react just need to create root which can be created any where like header, footer, side page)
React is just a piece of JS code written by Facebook developers.


