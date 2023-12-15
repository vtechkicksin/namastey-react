import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = (props) => {
  const { title, itemCards } = props.data;
  console.log(props);
  const handleClick = () => {
    props.setShowIndex();
  };
  return (
    <div>
      <div className="w-6/12 mx-auto my-2 bg-gray-50 shadow-lg p-4">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="text-lg font-bold">
            {title} - ({itemCards.length})
          </span>
          <span>🔽</span>
        </div>
        {props.showItem && <ItemList item={itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
