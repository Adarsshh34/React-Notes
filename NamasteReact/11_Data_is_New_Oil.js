# Higher Order component
higher order component is a just a js function which takes input a component and output is enhanced component with some extra feature
takes component as a input and enhanced it (add extra feature) and returns it
E.g. In our swiggy app we take input restaurant card and return as promoted restaurant for some restaurant

Higher order component
input - restaurant card
output - promoted restaurant card

# HOC
export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    // const {id, resdata} = props;
    return (
      <div>
        <label className="promoted">Promoted</label>
        <Restaurant {...props} />
      </div>
    );
  };
};

to use HOC
import { withPromotedLabel } from "./Restaurant";

const RestaurantPromotedLabel = withPromotedLabel(Restaurant);

return restaurant.info.promoted ? ( 
          <RestaurantPromotedLabel key={restaurant.info.id} resdata={restaurant.info} />
          ) : (
            <Restaurant key={restaurant.info.id} resdata={restaurant.info} />
          );

# Build Accordian


# React Context
step 1: 
Create context using createContext()
import { createContext } from "react";
const UserContext = createContext({
  loggedIn: "Default User",
});
export default UserContext;

step 2: 
Use context in app
import UserContext from "../utils/UserContext";
import { useContext } from "react";

Note: Since class based component does not have hooks so we can't use useContext in class base component
      But there is a way to use this in class based component

import UserContext from "../utils/UserContext";

<UserContext.Consumer>
            {(data) => (      -> we have to write arrow function which will receive data
              <>                    and we can use that 
                <span>LoggedIn User: </span>
                <span>{data.loggedIn}</span>
              </>
            )}
</UserContext.Consumer>





