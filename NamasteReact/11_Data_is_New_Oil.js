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

