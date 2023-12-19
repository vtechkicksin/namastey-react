import RestaurantCard from "./Restaurant";
import Shimmer from "./Shimmer";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";
const Body = () => {
  // Local State Variable - super powerful variable
  const [listOfRestaurant, setListOfRestaurant] = useState(null);
  const [filteredList, setFilteredList] = useState([]);

  const [searchText, setSearchtext] = useState("");

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    // .? is called optional chaining
    setListOfRestaurant(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredList(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    console.log("checking promoted", json?.data?.cards[2]?.card?.card);
  };
  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return <h1>Please check your internet connection</h1>;

  return listOfRestaurant === null ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex justify-center w-10/12 bg-gray-100 m-auto">
        <div className="search m-4 p-4">
          <input
            type="text"
            className="border border-solid border-black"
            value={searchText}
            onChange={(e) => {
              setSearchtext(e.target.value);
            }}
          />
          <button
            className="mx-4 px-4 py-2 bg-green-100 rounded-lg"
            onClick={() => {
              const filteredRestaurant = listOfRestaurant.filter((e) =>
                e.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredList(filteredRestaurant);
            }}
          >
            search
          </button>
        </div>
        <div className="search m-4 p-4 flex items-center">
          <button
            className="px-4 py-2 bg-gray-200 rounded-lg"
            onClick={() => {
              const filteredListRestaurant = listOfRestaurant.filter(
                (e) => e.info.avgRating >= 4.1
              );
              setFilteredList(filteredListRestaurant);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>
      <div className="flex flex-wrap justify-center w-10/12 m-auto bg-gray-300">
        {console.log("filteredList ", filteredList)}
        {filteredList.map((e) => (
          <Link key={e.info.id} to={"/restaurants/" + e.info.id}>
            <RestaurantCard resData={e} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
