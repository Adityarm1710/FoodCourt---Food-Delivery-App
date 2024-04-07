import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setsliderList, setsliderTitle } from "../constants/sliderSlice";

const usegetsliderdata = () => {
 
  const dispatch = useDispatch();
  
  const getrestosliderdata = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    dispatch(setsliderList(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants));
    dispatch(setsliderTitle(json?.data?.cards[1]?.card?.card?.header?.title));
  };

  useEffect(() => {
    getrestosliderdata();
  }, []);

};

export default usegetsliderdata;
