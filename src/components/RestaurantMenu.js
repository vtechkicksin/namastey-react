import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../../utils/constants";
import useRestaurantMenu from "../../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);
  console.log("restaurant ", resInfo);
  if (resInfo.length === 0) {
    return <Shimmer />;
  }

  const { name, cuisines, costForTwoMessage } =
    resInfo?.data?.cards[0]?.card?.card?.info;
  const { itemCards } =
    resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card ||
    resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card;

  // console.log(
  //   "resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards>>>>>",
  //   resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards
  // );
  const categories =
    resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  console.log("categories>>>>>", categories);
  return (
    <div className="text-center ">
      <h1 className="font-bold m-10 text-2xl">{name}</h1>
      <p className="font-bold">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      {categories.map((categories) => (
        <RestaurantCategory data={categories?.card?.card} />
      ))}
      {/* <h2>Menu</h2>
      <ul>
        {itemCards.map((item) => {
          return (
            <li key={item.card?.info?.id}>
              {item.card?.info?.name} -{"Rs. "}{" "}
              {item.card?.info?.price / 100 ||
                item.card?.info?.defaultPrice / 100}
            </li>
          );
        })}
      </ul> */}
    </div>
  );
};

export default RestaurantMenu;
