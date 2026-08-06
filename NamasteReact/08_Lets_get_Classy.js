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
 1. why we do not write async while using useEffect to make api call
    ANS: useEffect expect its callback function to return undefined(nothing) or a cleanup function and async function always returns Promise
          which doesn't match what React expects.
         What happens if you write async?
            useEffect(async () => {
              const response = await fetch(url);
              const data = await response.json();
              setData(data);
            }, []);
    -> it will not throw an error but react would warn
    useEffect(() => {   -> it is equivalent to this
      return Promise;
    }, []);
    -> React cannot use promise as a cleanup function
     ** follow up question
      when we don't explicitly write clean up function in that case what useeffect return 
        useEffect(() => {                          useEffect(() => {
          fetchData();              ->               fetchData();
        }, []);                equivalent to         return undefined;
                                                   }, []);
 2. why we write construtor(props)
    ANS: 
        i. To initialize the component (constructor).
        ii. To make this.props available inside the constructor (super(props)).
      What is a constructor? -> A constructor is a special method of a JavaScript class that runs automatically when an object is created.

      Example:
      class Person {
        constructor(name) {
          console.log("Constructor called");
          this.name = name;
        }
      }
      const p = new Person("Adarsh");

      Output:
      Constructor called
      
      Similarly, when React creates your component:
      <User />
      
      React internally does something like:
      new User(props);
      So the constructor executes first.
        
      Why do we write constructor(props)?
      
      React passes all the props to the constructor.
      class User extends React.Component {
        constructor(props) {
          super(props);
          console.log(props);
        }
        render() {
          return <h1>Hello</h1>;
        }
      }
      
      If the component is used like this:
      <User name="Adarsh" age={25} />
      Then inside the constructor:
      props is -> 
      {
        name: "Adarsh",
        age: 25
      }

      Why do we write super(props)?  -> Your class extends React.Component, So React.Component is the parent class.
      When you create a child class in JavaScript, you must call the parent constructor before using this.
      super(props) calls the constructor of React.Component.
      It initializes:
        - this
        - this.props
        - other internal React functionality






