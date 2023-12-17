import { useDispatch } from "react-redux";
import { addItem } from "../../utils/cartSlice";
import { CDN_URL } from "../../utils/constants";

const ItemList = ({ item }) => {
  const dispatch = useDispatch;
  const handleAddItem = () => {
    // dispatch an action
    dispatch(addItem("pizza"));
  };
  return (
    <div>
      {item.map((e) => (
        <div
          key={e.card.info.id}
          className="p-2 m-2 border-gray-300 border-b-2 text-left flex justify-between"
        >
          <div className="w-9/12">
            <div className="py-2">
              <span>{e.card.info.name}</span>
              <span>
                - ₹ {e.card.info.price / 100 || e.card.info.defaultprice / 100}
              </span>
            </div>
            <p className="text-xs">{e.card.info.description}</p>
          </div>
          <div className="w-3/12 p-4">
            <div className="absolute">
              <button
                className="p-2 mx-16 rounded-lg bg-black text-white shadow-lg "
                onClick={handleAddItem}
              >
                Add
              </button>
            </div>
            <img src={CDN_URL + e.card.info.imageId} className="rounded-2xl" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
