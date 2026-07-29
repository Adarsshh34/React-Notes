# Redux

Redux is **not mandatory** and is primarily used in **large-scale applications**.

- Redux is **not part of React**.
- Redux is a **state management library**.
- Zustand is another popular state management library similar to Redux.

For React applications, we commonly use the following libraries:

- **react-redux**
- **Redux Toolkit (RTK)**

---

# Redux Store

The **Redux Store** is a large JavaScript object that stores the application's global state.

- It stores every state of the application.
- It is kept in a **central global location**.
- Any component can access the data stored inside it.

```text
Application
      │
      ▼
+----------------------+
|     Redux Store      |
|----------------------|
| Cart                 |
| User                 |
| Theme                |
| Orders               |
+----------------------+
```

---

# Slices

A **Slice** is a logical partition of the Redux Store.

A single Redux Store can contain multiple slices.

### Example (Food Ordering App)

- Cart Slice
- Logged-in User Slice
- Theme Slice (Dark/Light Mode)

```text
Redux Store
│
├── Cart Slice
├── User Slice
└── Theme Slice
```

### Important

React/Redux follows the principle of **immutable state**.

You **should not modify a slice directly**.

Instead:

1. Dispatch an action.
2. The action calls a reducer.
3. The reducer updates the appropriate slice of the store.

### Example

When the user clicks the **"Add to Cart"** button:

```text
User clicks "Add to Cart"
            │
            ▼
     Dispatch Action
            │
            ▼
      Reducer Function
            │
            ▼
Updates Cart Slice
            │
            ▼
Redux Store Updated
```

---

# Reducer

A **Reducer** is a function that updates the Redux Store.

When an action is dispatched, the corresponding reducer executes and updates the required slice.

### Example

```text
"Add to Cart" Button
        │
        ▼
Dispatch(addItem)
        │
        ▼
Reducer
        │
        ▼
Updates Cart Slice
```

---

# Selector

A **Selector** is used to read data from the Redux Store.

It allows React components to access only the data they need.

### Example

```javascript
import { useSelector } from "react-redux";

const cartItems = useSelector((store) => store.cart.items);
```

---

# Subscribing to the Store

When a component uses `useSelector()`, it automatically **subscribes** to that part of the Redux Store.

Whenever the selected state changes:

1. The Redux Store is updated.
2. The selector detects the change.
3. React automatically re-renders the component with the latest data.

```text
Redux Store Changes
        │
        ▼
Selector Detects Change
        │
        ▼
React Component Re-renders
        │
        ▼
Updated UI
```

---

# Complete Redux Flow

```text
User Action
     │
     ▼
Dispatch Action
     │
     ▼
Reducer
     │
     ▼
Redux Store Updated
     │
     ▼
Selector Reads Data
     │
     ▼
React Component Re-renders
```

---

# Summary

- Redux is **not mandatory**.
- Redux is **not part of React**.
- Redux is a **state management library**.
- **Redux Toolkit** is the recommended way to write Redux logic.
- The **Redux Store** is a central JavaScript object that stores global application state.
- The store is divided into **Slices**.
- Never modify a slice directly.
- Dispatch an **Action** to request a state update.
- A **Reducer** updates the store.
- A **Selector** reads data from the store.
- Components using `useSelector()` automatically subscribe to store updates and re-render when the selected state changes.
