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
