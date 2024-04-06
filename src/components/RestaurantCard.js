export const RestaurantCard = (props) => {
  const { restaurant }= props;
  const {
     name,
     cloudinaryImageId,
     avgRating,
     cuisines,
     costForTwo,
     sla,
     areaName
   }= restaurant?.info;

   
  return (
    <div className="mr-2 mb-2 transition-transform duration-500 hover:scale-90 hover:shadow-xl hover:rounded-lg hover:bg-slate-50 rounded-md w-[320px]">
      <img className="rounded-md w-full h-44 shadow-md object-cover"
        alt="res-logo"
        src={"https://media-assets.swiggy.com/swiggy/image/upload/" + cloudinaryImageId }
      />
      <div className="m-1">
      <h3 className="font-bold text-lg">{name}</h3>
      <span className="font-bold rounded-full p-1 text-white bg-green-700 text-xs">⭐</span>
      <span className="ml-2 font-bold">{avgRating}</span>
      <span className="ml-1 font-bold">• {sla.deliveryTime} mins</span>
      <h4 className="truncate">{cuisines.join(", ")}</h4>
      <div className="flex">
      <h3>{areaName}</h3>
      <h3 className="ml-1">• {costForTwo}</h3>
      </div>
      </div>
    </div>
  );
};