import { useDispatch} from "react-redux";
import { addItem } from "../constants/cartSlice";

const ItemsList=({items})=>{

  const dispatch = useDispatch();
  const handlecart=(item)=>{
      dispatch(addItem(item));
  } 
  return (
    <div>
      {items.map((item)=>(
        <div className=" pl-1 m-1 h-22 border-b-2 border-gray-500 flex justify-between">
          <div className="text-left w-10/12">
          <div>
            <span className="font-bold text-md">{item.card.info.name}</span>
            <span className="font-bold text-md"> - Rs {item.card.info.price ? item.card.info.price/100 : item.card.info.defaultPrice/100}</span>
          </div>
          <div className="text-justify">
          <p className="text-md mt-1">{item?.card?.info?.description}</p>
          </div>
          </div>
          <div className=" w-2/12 ml-2 pr-1" >
            <img className="mt-2 min-w-full pr-1"src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/" + item.card.info.imageId}/>
            <button className="w-full pr-2 bg-red-500 text-lg text-black rounded-md mt-1 mb-2 hover:shadow-lg" onClick={()=>handlecart(item)}>ADD+</button>
            </div>
        </div>
      ))}
    </div>
  );
};

export default ItemsList;