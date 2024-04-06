import { useState } from "react";

const About = () => {

  const [moreinfostatus,setmoreinfostatus] =useState(false);
  const handlemoreinfostatus = ()=>{
     moreinfostatus === true ? setmoreinfostatus(false) : setmoreinfostatus(true);
  };

  return (
    <div className="w-full  mt-10">
      <div className="font-bold text-3xl text-pink-600 text-center">
        ABOUT US
      </div>
      <div className="flex ml-20 mt-20">
        <div className="w-[70%] mr-4 text-center text-md pt-10">
          At Food Court, our mission is to bring the joy of delicious meals to
          your doorstep, fostering moments of connection and satisfaction
          through convenient food delivery services. We strive to curate an
          extensive array of cuisines, catering to diverse tastes and
          preferences, while prioritizing quality, freshness, and affordability.
          With every delivery, we aim to exceed expectations, making dining
          experiences not just convenient but memorable.
          <br />
          <br />
          Since our inception in 2022, Food Court envisions becoming the premier
          destination for discerning food enthusiasts seeking hassle-free
          culinary experiences. We aspire to revolutionize the food delivery
          industry by consistently innovating and adapting to evolving consumer
          needs and technological advancements. Our vision extends beyond mere
          delivery; we aim to cultivate a community around food, where every
          meal delivered embodies our commitment to excellence, convenience, and
          customer satisfaction. As we grow, our vision remains anchored in
          providing unparalleled culinary experiences, one delivery at a time.
          <p className="">
            <button onClick={()=>handlemoreinfostatus()}className="px-4 py-2 cursor-pointer mt-12  bg-pink-600 text-white">
              {moreinfostatus ===true ? "Know Less" : "Know More"}
            </button>
          </p>
        </div>
        <div className="w-[30%]">
          <img
            className="w-[80%] border-2 shadow-lg"
            src="https://images-workbench.99static.com/uNN5i13HsdTZqMFxxZ96TF1vPXY=/99designs-contests-attachments/118/118612/attachment_118612943"
          />
        </div>
      </div>
      {moreinfostatus && <div className="w-full mx-auto ml-15 mt-20 mb-10 ">
        <h1 className="text-red-500 font-bold text-2xl text-center mb-3">
          About the Developer...
        </h1>
        <p className="text-md text-center">
         <br />
          ✒ Hello there! I'm Aditya Mishra, the mastermind behind Food Court, your
          go-to destination for delightful food delivery experiences. As a
          dedicated software engineer with a fervent passion for full-stack
          development, I embarked on a journey to revolutionize the culinary
          landscape through technology.
          <br />
          <br />
          Beyond my role as a software engineer, I am a true food enthusiast at
          heart. I believe that great meals have the power to bring people
          together, evoke emotions, and create lasting memories. It is this
          passion for gastronomy that drives me to continuously enhance and
          expand the offerings of Food Court, ensuring that every customer
          enjoys a truly exceptional dining experience.
          <br />
          <br/>
          Thank you for choosing Food Court, and for allowing me the opportunity
          to share my love for technology and food with you. Together, let's
          embark on a journey of flavor and innovation unlike any other.
        </p>
      </div>}
    </div>
  );
};

export default About;
