import React, { Component } from "react";

class Hero extends Component {
  render() {
    return (
      <div className="container mx-auto  pt-4 relative">
        <div className="">
          <img
            src="/Images/hero-01.jpg"
            className="md:h-[590px] mx-auto h-full w-full absolute object-center bg-gray-500 opacity-55 mix-blend-screen  md:w-full object-cover rounded-3xl items-center"
          />
        </div>
        <div className="text-white justify-center text-justify md:mx-12 mx-6 mt-6 md:mt-32  ">
          <h1 className="md:text-left text-center wow animate__animated animate__fadeInLeft duration-200">
            NEW COLLECTION
          </h1>
          <h1 className="md:text-8xl md:text-left text-4xl text-center headernav break-words wow animate__animated animate__fadeInLeft duration-200">
            HALLOWEEN <br></br> DECORATIONS{" "}
          </h1>
          <p className="text-base md:text-left py-2 md:w-2/4 text-gray-400 wow animate__animated animate__fadeInUpBig duration-200">
            Whether you prefer the charm of classic Halloween decor or the
            thrill of modern and innovative designs, these decorations invite
            you to join in the celebration of all things eerie, enigmatic, and
            enchanting.
          </p>
        </div>
        <div className="flex justify-center md:justify-start">
          <button className="text-white text-base md:text-base bg-[#E35701] p-2 rounded-lg md:w-36 w-28 md:mx-12 mx-auto mt-6 font-bold wow animate__animated animate__fadeInUpBig duration-200">
            SHOP NOW
          </button>
        </div>
      </div>
    );
  }
}

export default Hero;
