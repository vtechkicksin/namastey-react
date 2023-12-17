import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../../utils/cartSlice";
import ItemList from "./ItemList";

const Cart = () => {
  const cartitems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();
  const handleClearItem = () => {
    dispatch(clearCart());
  };

  return (
    <div className="text-center m-4 p-4">
      <h1 className="text-lx font-bold">Cart</h1>
      <button
        className="p-4 m-4 bg-black text-white rounded-2xl"
        onClick={handleClearItem}
      >
        Clear Cart
      </button>
      <div className="w-6/12 m-auto">
        <ItemList item={cartitems} />
      </div>
    </div>
  );
};

export default Cart;
