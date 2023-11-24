import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);
  const fetchMenu = async () => {
    const response = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.931458241130928&lng=77.6299859583378&restaurantId=223&catalog_qa=undefined&submitAction=ENTER"
    );
    const json = await response.json();
    setResInfo(json);
  };
  if (resInfo.length === null) {
    return <Shimmer />;
  }

  const { name, cuisines, costForTwoMessage } =
    resInfo?.data?.cards[0]?.card?.card?.info;

  // resInfo?.data?.cards[0]?.card?.card?.info.name
  // resInfo?.data?.cards[0]?.card?.card?.info.cuisines.join(" ")
  // resInfo?.data?.cards[0]?.card?.card?.info.costForTwoMessage
  return (
    <div className="menu">
      <h1>{name}</h1>
      <h3>{cuisines.join(" ")}</h3>
      <h3>{costForTwoMessage}</h3>
      <h3>
        {
          resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]
            ?.card?.card?.itemCards[0]?.card?.info?.name
        }
      </h3>
      <h2>Menu</h2>
      <ul>
        <li>Biryani</li>
        <li>Burger</li>
        <li>Diet Coke</li>
      </ul>
    </div>
  );
};

export default RestaurantMenu;
