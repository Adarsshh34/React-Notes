Redux is a predictable state management library used to manage global application state in a centralized way.
Video link : https://www.youtube.com/watch?v=1i04-A7kfFI
  Features
    entire app state is stored in one object called state
    you cannot modify state directly, you need to do it with dispatcher({type: "INCREMENT"})
  Building block of redux
    1. Store
      Holds the entire state tree
      const store = createStore(reducer);

1️⃣ Store
   {
    counter: {
      value: 0
    }
  }
  we also need to configure store as below
  import { configureStore } from "@reduxjs/toolkit";
  import counterReducer from "./counterSlice";
  
  export const store = configureStore({
    reducer: {
      counter: counterReducer
    }
  });
2️⃣ Action
  { type: "counter/increment" }
3️⃣ Reducer
  import { createSlice } from "@reduxjs/toolkit";
  const counterSlice = createSlice({
    name: "counter",
    initialState: { value: 0 },
    reducers: {
      increment: (state) => {
        state.value += 1;
      },
      decrement: (state) => {
        state.value -= 1;
      }
    }
  });
  we also call Reducer ad Slice i.e counterSlice or counterReducer
  createSlice function takes object as above

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
4️⃣ Dispatch
  const dispatch = useDispatch();
  <button onClick={() => dispatch(increment())}>+</button>
  dispatcher function is used to send action to redux so that it can perform action on the state
5️⃣ Selector
  const count = useSelector(state => state.counter.value);
  useSelector is use to obtain value of the state
