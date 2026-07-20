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

= Interview Question : if there are 
  Parent constructor,Parent render, Child ComponentDidMount
  Child constructor,Child render, Child ComponentDidMount
what will be the sequence of execution

Parent Constructor
Parent Render
Child Constructor
Child Render
Child ComponentDidMount
Parent ComponentDidMount


