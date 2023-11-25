import { CDN_URL } from "../../utils/constants";
import { Link } from "react-router-dom";
import { useState } from "react";
const RestaurantCard = (props) => {
  // console.log(props.resData.info.feeDetails.restaurantId)
  return (
    <div
      className="res-card"
      style={{
        backgroundColor: "#f0f0f0",
      }}
    >
      <img
        alt=""
        className="res-logo"
        src={CDN_URL + props.resData.info.cloudinaryImageId}
      />
      <h3>{props.resData.info.name}</h3>
      <h4>{props.resData.cuisines}</h4>
      <h4>{props.resData.info.costForTwo}</h4>
      <h4>{props.resData.info.avgRating}stars</h4>
      <h4>{props.resData.info.deliveryTime}</h4>
    </div>
  );
};

export default RestaurantCard;
