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


