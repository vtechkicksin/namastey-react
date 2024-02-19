import { CDN_URL } from "../../utils/constants";
import { Link } from "react-router-dom";
import { useState } from "react";
const RestaurantCard = (props) => {
  // console.log(props.resData.info.feeDetails.restaurantId)
  return (
    <div data-testid="resCard" className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-300">
      <img
        alt=""
        className="rounded-lg w-[250px] h-[250px]"
        src={CDN_URL + props.resData.info.cloudinaryImageId}
      />
      <h3 className="font-bold py-4 text-lg">{props.resData.info.name}</h3>
      <h4>{props.resData.cuisines}</h4>
      <h4>{props.resData.info.costForTwo}</h4>
      <h4>{props.resData.info.avgRating}stars</h4>
      <h4>{props.resData.info.deliveryTime}</h4>
    </div>
  );
};

export default RestaurantCard;
