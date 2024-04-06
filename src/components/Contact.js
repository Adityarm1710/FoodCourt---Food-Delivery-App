const Contact = () => {
  return (
    <div className="flex w-[50%] align-middle m-auto left-0 right-0 mt-20 shadow-lg">
      <div className="w-[50%] mr-5 bg-violet-800">
        <p className="text-white text-xl font-bold pl-8 mt-8">
          Send us a message
        </p>
        <form className="m-8 ">
          <input
            className="w-full py-3 bg-transparent border-b-2 text-black font-medium  px-2 border-b-slate-500 rounded-sm mb-2"
            type="text"
            placeholder="Name"
          />
          <input
            className="w-full py-3 bg-transparent border-b-2 text-black font-medium px-2 border-b-slate-500  rounded-sm mb-2"
            type="number"
            placeholder="Phone Number"
          />
          <input
            className="w-full bg-transparent py-10 border-b-2 text-black font-medium px-2 border-b-slate-500  rounded-sm mb-2"
            type="text"
            placeholder="Write a Message Here..."
          />
          <button className="bg-pink-600 py-3 rounded-lg w-[50%] mt-3 font-bold text-white">
            Send Message
          </button>
        </form>
      </div>
      <div className="w-50%">
        <p className="text-black pl-2 font-bold text-2xl mt-8">Contact US</p>
        <p className="text-black pl-2 pt-2 text-md">
          We're open for any suggestions or just to have a chat.
        </p>
        <p className="pl-2 mt-16">
          <span className="mr-1">📍</span>
          <span className=" font-bold text-black">Address : </span>
          <span className="text-black">Bengaluru, INDIA</span>
        </p>
        <p className="pl-2 mt-8">
          <span className="mr-1">📞</span>
          <span className=" font-bold text-black">Phone : </span>
          <span className="text-black">123-5678910</span>
        </p>
        <p className="pl-2 mt-8">
          <span className="mr-1">📩</span>
          <span className=" font-bold text-black">Email : </span>
          <span className="text-black">xyz123@gmail.com</span>
        </p>
      </div>
    </div>
  );
};

export default Contact;
