useContext is a React Hook that lets a component consume context values without having to pass props manually through every level of the component tree.

STEPS:
1. Create a context:
import { createContext } from "react";
export const UserContext = createContext();

2. Provide the context value:
<UserContext.Provider value={{ name: "Adarsh" }}>
  <Child />
</UserContext.Provider>

3. Consume the context in a child component:
import { useContext } from "react";
import { UserContext } from "./UserContext";

function Child() {
  const user = useContext(UserContext);
  return <h2>Hello, {user.name}!</h2>;
}

useContext(MyContext) returns the current context value
If the context value changes, the component re-renders
Avoid using it for frequent updates (like every keystroke) — may hurt performance
Can be used with multiple contexts by calling useContext multiple times

Practical Use Cases
Theme management (dark/light mode)
Authentication state (logged in user)
Language/localization

Global settings shared across the app
