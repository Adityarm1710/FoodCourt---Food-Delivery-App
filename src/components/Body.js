import { useState } from "react";
import { RestaurantCard } from "./RestaurantCard";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import usegetsliderdata from "../hooks/Usegetsliderdata";
import { useSelector } from "react-redux";
import Loader from "./Loader";

export const Body = () => {
  const [resList, setresList] = useState([]);
  const [filteredList, setfilteredList] = useState("");
  const [searchtext, setsearchtext] = useState("");

  usegetsliderdata();

  const sliderData = useSelector((store) => store?.slider?.sliderList);
  const sliderTitle = useSelector((store)=>store?.slider?.sliderTitle);
  // console.log(sliderTitle);

  async function fetchRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setresList(
      json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
    setfilteredList(
      json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
  }

  useEffect(() => {
    fetchRestaurants();
  }, []);

  if (resList.length === 0) {
    return <Loader />;
  }
  return (
    <div className="mt-2">
      <div className="mt-3 flex justify-center">
        <div className="ml-10">
          <input
            className="border border-s-2 px-2  border-black w-[300px] py-2 rounded-md"
            type="text"
            value={searchtext}
            placeholder="Type Hotels Here..."
            onChange={(e) => {
              setsearchtext(e.target.value);
            }}
          />
          <button
            className="bg-green-300 m-2 py-2 px-10 text-black rounded-md font-bold"
            onClick={() => {
              const filterList = resList.filter((res) => {
                return res.info.name
                  .toLowerCase()
                  .includes(searchtext.toLowerCase());
              });
              setfilteredList(filterList);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="bg-green-300  m-2 py-2 px-4 text-black w-30 h-10 rounded-md font-bold"
          onClick={() => {
            const res = resList.filter((result) => {
              return result.info.avgRating > 4.2;
            });
            setfilteredList(res);
          }}
        >
          Top Hotels
        </button>
      </div>
      <div className="mt-3">
        <h1 className="ml-10 font-bold text-black text-md">{sliderTitle}</h1>
        <div className="flex overflow-x-scroll mt-2 ml-10 w-[94%]">
          <div className="flex">
            {sliderData?.map((resto) => (
              <Link key={resto.info.id} to={"/restaurants/" + resto.info.id}>
              <RestaurantCard restaurant={resto} />
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-8">
      <h1 className="ml-10 font-bold text-black text-md">  
      Restaurants with online food delivery in Bangalore
      </h1>
      <div className=" flex flex-wrap justify-evenly mt-2">
        {filteredList?.map((restdata) => (
          <Link key={restdata.info.id} to={"/restaurants/" + restdata.info.id}>
            <RestaurantCard restaurant={restdata} />
          </Link>
        ))}
      </div>
      </div>
    </div>
  );
};
