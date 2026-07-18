# Export & Import
ways to export 
- default export
  can be used only once
  we can directly import 
  import Restaurant from "./Restaurant";
  
- named export
  can be used multiple times
  to import named export we need to write in curly bracket
  import { LOGO_URL } from "../Constant";

# Need of using useState
if we want that when variable changes ui should re-render itself, this is not possible when
JS let and const that's why we use useState so that it update the state and also triggers re-render

# useState
Note: Never create useState variable inside if-else or for loop

# Reconciliation Alogorithm (React Fiber) 
Note: this comes in React 16 called as React Fiber

Real Dom -> <div></div>
Virtual Dom -> representation of actual dom
React element which we create using React.createElement() it create object 
virtual dom is basically this object (JS Object )

Diff Alogirthm -> find out difference between old virtual dom and new virtual dom and it will update
                  Real Dom at every Render cycle
Source : https://github.com/acdlite/react-fiber-architecture





