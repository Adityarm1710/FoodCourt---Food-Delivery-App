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
            className="border border-solid border-black w-[300px] py-2 rounded-md "
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
      <div>
        <h1 className="font-bold text-black text-2xl">{SliderTitle}</h1>
        <div className="flex overflow-x-scroll mt-5 ml-10 w-[94%]">
          <div className="flex">
            {sliderData?.map((resto) => (
              <RestaurantCard restaurant={resto} />
            ))}
          </div>
        </div>
      </div>
      <div className="mt-14 flex flex-wrap justify-evenly m-3">
        {filteredList?.map((restdata) => (
          <Link key={restdata.info.id} to={"/restaurants/" + restdata.info.id}>
            <RestaurantCard restaurant={restdata} />
          </Link>
        ))}
      </div>
    </div>
  );
};
