import RestaurantCard from "./Restaurant";
import resObj from "../../utils/test";
import { useState } from "react";

const Body = () => {
  // Local State Variable - super powerful variable
  const [listOfRestaurant, setListOfRestaurant] = useState(resObj);

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurant.filter(
              (e) => e.info.avgRating >= 4.2
            );
            setListOfRestaurant(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="restaurant-container">
        {listOfRestaurant.map((e) => (
          <RestaurantCard key={e.info.id} resData={e} />
        ))}
      </div>
    </div>
  );
};

export default Body;
