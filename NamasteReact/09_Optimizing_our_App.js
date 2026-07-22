# Concept of lazy loading and Suspense in React

when we have a huge application like Makemytrip or swiggy in react and when we create a production build
it basically create one single js file for the entire app
it is good for small application but not good for large application
we need apply code splitting or chuncking or dynamic bundling or lazy loading or on demand loading

so to solve this we use lazy loading and suspense
Example we are creating swiggy application it has 2 parts
1. food ordering 
2. gorcery ordering

these are 2 logically different units we need to divide our code in
apply lazy loading we to import component like below

import {lazy} from "react"

instead of this
import Grocery from "./component/Grocery"

we do 
const Grocery = lazy(() => import("./component/Grocery"));

now we clicked on grocery section we can get error beacuse our app
is now divided into 2 halfs 
we are using food ordering part and now we want grocery part 
for grocery part we need to fetch its js file
time between fetch grocery js file and react rendering grocery component we can end up in error to prevent this we use Suspense as below
<Suspense fallback={<h1>Loading....></h1>}> <Grocery/> </Suspense>

this is not gives us error while fetching grocery js files and show us loading...
