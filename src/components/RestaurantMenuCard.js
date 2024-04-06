import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./shimmer";
import MenuList from "./MenuList";

const RestaurantMenuCard = () => {
  const [resMenu, setresMenu] = useState([]);
  const [resInfo, setresInfo] = useState(null);
  const [showIndex,setshowIndex] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const { resId } = useParams();

  const fetchMenu = async () => {
    const menu = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId=" +resId + "&catalog_qa=undefined&submitAction=ENTER"
    );

    const json = await menu.json();

    // console.log(json);
    // console.log(json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
    setresMenu(json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
    // console.log(json.data.cards[2].card.card.info);
    setresInfo(json?.data?.cards[2]?.card?.card?.info);
  };


  if (resMenu?.length == 0 || resInfo === null) {
    return <Shimmer />;
 }

  const menuList = resMenu?.filter((c) => {
    return (
      c?.card?.card?.["@type"] ==
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  });


 
  return (
    <div>
      <div className="bg-red-400 text-black text-center m-auto">
        <h1 className="text-5xl font-bold mt-1">{resInfo?.name}</h1>
        <h2 className="text-lg">{resInfo?.cuisines.join(", ")}</h2>
        <span className="font-bold rounded-full p-1 text-white bg-green-700 text-xs">⭐</span>
        <span className="ml-1 text-md">{resInfo?.avgRating}</span>
        <h3 className="text-md mb-2">{resInfo?.areaName}</h3>
      </div>
      <div>
        {
        menuList?.map(
          (menu,index) => <MenuList data={menu?.card?.card} showItems={index===showIndex ? true:false} setshowIndex={()=>setshowIndex(index)} />
        )
        }
      </div>
    </div>
  );
};

export default RestaurantMenuCard;

