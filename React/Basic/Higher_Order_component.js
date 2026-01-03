A Higher Order Component is a function that:
    Takes a component as input and returns a new enhanced component.
Think of it like a wrapper that adds extra behavior to a component without changing the original component’s code.

# Main File
import "./styles.css";
import DashBoard from "./components/DashBoard";
import Profile from "./components/Profile";

export default function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>HOC Example</h1>
      <DashBoard />
      <Profile />
    </div>
  );
}

# Dashboard Component
import withAuth from "../hoc/withAuth";
const DashBoard = () => {
  return <h2>Dashboard Page</h2>;
};
export default withAuth(DashBoard);    // while exporting we are exporting enhanced component by passing DashBoard component

# Profile component
import withAuth from "../hoc/withAuth";
const Profile = () => {
  return <h2>Profile Page</h2>;
};
export default withAuth(Profile);   // while exporting we are exporting enhanced component by passing Profile component

# withAuth component (HOC -> which takes component and return a with enhance component)
const withAuth = (WrappedComponent) => {
  return function AuthComponent(props) {
    const isLoggedIn = false; // change to true to see effect

    if (!isLoggedIn) {
      return <h3>❌ Please Login to access this page</h3>;
    }
    return <WrappedComponent {...props} />;
  };
};
export default withAuth;



    
