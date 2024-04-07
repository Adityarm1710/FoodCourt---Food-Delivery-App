const Topslidercard = ({data})=>{
  
  const {imageId} = data;

  return(
    <div className="">
      <img className="mb-2 " alt="items Bannner" src={"https://media-assets.swiggy.com/swiggy/image/upload/"
      + imageId}/>
    </div>
  );
};

export default Topslidercard;