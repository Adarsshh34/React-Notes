Redux is a predictable state management library used to manage global application state in a centralized way.
  Features
    entire app state is stored in one object called state
    you cannot modify state directly, you need to do it with dispatcher({type: "INCREMENT"})
  Building block of redux
    1. Store
      Holds the entire state tree
      const store = createStore(reducer);
