# Redux

redux is not mandatory

it is used in large scale application

redux is not only library Zustand is similar like redux for state management

redux is not part of react

we will use 2 library

- react-redux
- redux toolkit

# Store

redux Store is a large js object which stores every state

and it kept at central global space

# Slices

parts of the redux store is called slices

one store can have multiple slices i.e multiple parts

it is basically logicall partition of the store

E.g. for our food ordering app

- slice for cart data
- slice for loggedin user
- slice for theme (dark/light mode)

so this is slice, logical paratition of the store

- React says that you can't directly modify slice (i.e store)
  we need to dispatch our action which would execute a function which will update the store

- In our food ordering app
  when user click on "add to cart" btn a action would be dispatched which will calls a function
  and that function will update the slice of the store which is related to cart

 # in above case function that updates the store is called REDUCER

# Reducer

when "add to cart" btn is clicked it dispatches the action and calls reducer function

and reducer function will update the cart(slice of store)

# To read data form store -> for that we uses selector

# Selector

it will read data from the store and it will update the react component

# subscribing to the store

when data in store changes react automatically update the component to show new updated data i.e called subscribing to the store

how we subscribe the store -> with selector
