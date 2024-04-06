import { useDispatch, useSelector } from "react-redux";
import ItemsList from "./ItemsList";
import { clearCart } from "../constants/cartSlice";

const Cart = () => {

  const cartItems=useSelector((store)=>store.cart.items);
  
  const dispatch= useDispatch();
  const handlecart=()=>{
    dispatch(clearCart());
  }

  return (
    <div className="text-center mt-4">
      <h1 className="font-bold text-4xl">Cart</h1>
      <button className="bg-black text-white text-sm rounded-sm shadow-md cursor-pointer w-20 h-10 mt-2" onClick={()=>handlecart()}>Clear Cart</button>
      <div className="mt-4 w-6/12 m-auto">
        {cartItems.length===0 && <h1>Your Cart is Empty 😥</h1>}
         <ItemsList items={cartItems}/>
      </div>
    </div>
  );
};

export default Cart;
