Class Based Components

* functional Component                                        * Class Based Component
const User = () => {                                          class UserClass extends React.Component {
  return (                                                      render() {
    <div className="user-card">                                      <div className="user-card">
       <h2>name : Adarsh</h2>                                           <h2>name : Adarsh</h2>
       <h3>Location : Mumbai</h3>                                        <h3>Location : Mumbai</h3>
       <h3>Contact : 54687546346</h3>                                    <h3>Contact : 54687546346</h3>
     </div>                                                           </div>
  );                                                                 }
};                                                                  }
export default User;                                              export default UserClass;




#Life Cycle of Class Based Component
- sequence of execution in class based
  Constructor()
  render()
  ComponentDidMount()

 # Interview Question : if there are 
  Parent constructor,Parent render, Child ComponentDidMount
  Child constructor,Child render, Child ComponentDidMount
what will be the sequence of execution

Parent Constructor
Parent Render
Child Constructor
Child Render
Child ComponentDidMount
Parent ComponentDidMount

# Interview Question : if there are multiple child component 
  e.g. Parent1
        Child1
        Child2
Then what will the pattern for constructor, render and componentdidmount
ANS: 
Parent Constructor
Parent Render
Child 1 Constructor
Child 1 Render
Child 2 Constructor
Child 2 Render
Child 1 ComponentDidMount
Child 2 ComponentDidMount
Parent ComponentDidMount
Why react does this: 
  React runs in 2 phases as in image "Render" and "Commit"
  In Render phase constructor and Render gets executed
  to optimize react application, when commit phase get started react tries to manipulate DOM and 
  DOM Manipulation is most expensive thing so react batch both componentDidMount and execute them
  (Basically it delay most expensive operaion which is DOM Manipulation so that it get to know what actually need to be updated i.e final update of dom)

# Imp points
constructor -> render -> componentDidMount
Mounting cycle -> when component renders once
In render, the ui is been rendered with default values present in constructor
Updating cycle -> setState execute in this cycle
React trigger render once again (with updated state)

-------MOUNTING CYCLE--------
constructor (dummy data)
render (dummy data)
  <HTML Dummy>
ComponentDidMount
  <API CALL>
  <this.setState> -> state variable is updated

-------UPDATE CYClE------------
render (API data or updated data)
  <HTML API Data> -> HTML is loaded with HTML data
ComponentDidUpdate

------UNMOUNTING CYCLE-----------
componentWillUnMount  -> this will called when component will be gone from the page 
                          eg. navigating to new page


Question ?
 1. why we do not write async will using useEffect to make api call
 2. why we write construtor(props)






