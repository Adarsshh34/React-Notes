# Two approach
1. page load -> api fetch -> render ui

2.page -load -> render -> api call -> re-render ui with api
In React we will always use 2nd approach

# useEffect
useEffect(()=>{},[])
   callback function, dependency array
  this callback function runs when render cycle is finish
  if you have to do something after rendering the component you have write inside useEffect
  after render cycle means when ui gets painted entirely 


# Example (Sequence of execution)
import React, { useState, useEffect } from "react";
export default Body = () => {
  console.log("first")                                 ---> code execution will start from here
  useEffect(() => {                                    ---> it call keep this callback function and call after render completes
    console.log("useEffect called");
  }, []);
  
  console.log("Rendering...");                          ---> this would be executing and printed on console
  
  return (
    <div className="body">                              ---> after that this will paint the ui (Once everything is done callback function would be executing)
        <button className="filter-btn" onClick={(e) => MyButton()}>
          Top Rated Restaurant
        </button>
    </div>
  );
};
===== Console =======
first
Rendering...
useEffect called


Question?
Why we use only useEffect to make API call
ANS --> Since we need to follow 2nd approach we use Effect 
Another ANS --> if we call api directly from component we would end up in making multiple api call on every render
                useEffect saves us in this. it will only run when ui gets painted and depend on dependency array we can recall it again

  
