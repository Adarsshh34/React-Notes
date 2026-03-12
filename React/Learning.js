when using .find .filter .some

# if we are writing with {} then we need to explicity write return
arr.find((ele)=>{
  return ele.name =="Adarsh"
})
# here no need to write return
arr.find((ele)=> ele.name =="Adarsh")
