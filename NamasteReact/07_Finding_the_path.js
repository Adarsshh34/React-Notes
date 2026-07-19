# useEffect
1. without dependency array
useEffect(()=>{
  console.log("hello");
})
console.log is executed after every render

2. With Dependency array empty
useEffect(()=>{
  console.log("hello");
},[])
console.log is executed only once on intial render
2. With Dependency array 
useEffect(()=>{
  console.log("hello");
},[var])
console.log called every time when var changes

# React Router Dom
import "./styles.css";
import Header from "./Components/Header";
import Body from "./Components/Body";
import Error from "./Components/Error";
import About from "./Components/About";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
export default function App() {
  const AppLayout = () => {
    return (
      <div className="App">
        <Header />
        <Outlet />
      </div>
    );
  };
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [                            ----> Children Routes: as per the route changes <Outlet/> is replaced with 
        {                                          elements   
          path: "/",
          element: <Body />,
        },
        {
          path: "/about",
          element: <About />,
        },
      ],
    },
  ]);
  return <RouterProvider router={appRouter} />;
}

# Linking a url
import { Link } from "react-router-dom";
<li>
    <Link to="/">Home</Link>
</li>

# Single Page Application
Why react is called single page application -> 
  1.when routes changes website doesn't reload because 
    React does not reload instead React just replaces Component
  2. Client side routing

#Graph QL


