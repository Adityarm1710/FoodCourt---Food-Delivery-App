import { useEffect } from "react";
import {useDispatch} from "react-redux";
import { settopsliderList, settopsliderTitle } from "../constants/topsliderSlice";

const usegettopsliderdata=()=>{
    
  const dispatch = useDispatch();

  const gettopsliderdata= async ()=>{
     const data= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
     const json = await data.json();
     dispatch(settopsliderList(json?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info));
     dispatch(settopsliderTitle(json?.data?.cards[0]?.card?.card?.header?.title));
  };

   useEffect(()=>{
      gettopsliderdata();
   },[]);
};

export default usegettopsliderdata;