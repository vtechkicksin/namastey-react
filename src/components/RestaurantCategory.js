import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = (props) => {
  const [itemCard, setItemCard] = useState(false);
  const { title, itemCards } = props.data;
  const handleClick = () => {
    setItemCard(!itemCard);
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
        {itemCard && <ItemList item={itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
