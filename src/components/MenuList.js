import ItemsList from "./ItemsList";
import { useState } from "react";

const MenuList = (props) => {
  const { data,showItems,setshowIndex } = props;
  //const [showItems,setshowIndex]=useState(false);
  
  const handleAccordian= ()=>{
      
      setshowIndex();
      //use if you dont want to use dynamic accordian
      // if(showItems===true) setshowIndex(false);
      // else setshowIndex(true);

  }

  return (
    <div className="w-8/12 mx-auto my-4 shadow-md bg-gray-200 ">
      <div className="flex justify-between cursor-pointer" onClick={handleAccordian}>
        <span className="pl-1 font-bold ">
          {data?.title} ({data?.itemCards?.length})
        </span>
        <span className="pl-1">⋁</span>
      </div>
      <div className="">
        {showItems && <ItemsList items={data?.itemCards}/>}
      </div>
    </div>
  );
};

export default MenuList;
