import React from "react";
import { Call, ChevronForward, Location, Mail } from "react-ionicons";

const Contact = () => {
  const handlebtn=()=>{
    console.log("cliked me")
  }
  return (
    <section>
      <div className="container mx-auto relative">
        <div className="uppercase py-3 text-white headernav text-center relative">
          {/* <img src="/Images/BG-1.jpg" className="mix-blend-screen absolute" /> */}
          <h1 className="md:text-xl text-sm wow animate__animated animate__slideInLeft">Get in touch</h1>
          <h2 className="md:text-8xl text-2xl wow animate__animated animate__slideInRight">Contact Us</h2>
        </div>
        <div className="flex flex-col md:flex-row">
          <img
            src="/Images/BG-4.jpg"
            className="mix-blend-screen w-full h-full absolute"
          />
          <div className="flex flex-col mx-6 text-left md:w-2/5 py-28 wow animate__animated animate__slideInLeft">
            <h1 className="flex headernav text-6xl py-2">Let's Talk</h1>
            <p className=" text-white text-base">
              We're here to assist you in every way possible, so don't hesitate
              to reach out with any questions or feedback.
            </p>
            <form className="py-4 space-y-6 text-black" name={handlebtn}>
              <label className="text-white">Name</label>
              <div className="flex flex-row md:space-x-6 space-x-3 text-black">
                <input
                  type="text"
                  required
                  placeholder="First Name"
                  className="md:w-[16rem] w-full h-14 p-2 text-black"
                  for="username"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className=" md:w-[16rem] w-full h-14 p-2 black"
                />
              </div>
              <div>
                <label className="text-white">Email</label>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full h-14 p-2 text-black"
                />
              </div>
              <div>
                <label className="text-white">Message</label>
                <textarea
                  placeholder="Message"
                  className="w-full h-32 p-2 text-black"
                />
              </div>
              <div className="flex md:justify-start justify-center">
                <button onClick={handlebtn} className="text-black text-center md:mx-0  mx-auto uppercase p-3 w-24 rounded-lg bg-orange-500">
                  Send
                </button>
              </div>
            </form>
          </div>
          <div className="flex flex-col mx-28 mt-48  md:w-2/4 md:py-28 text-white wow animate__animated animate__slideInRight">
            <div className="">
              <Location color={"#fbf9f9"} height="30px" width="30px" />
              <h1 className="headernav text-white md:text-3xl text-2xl">Address</h1>

              <p className="text-gray-400 text-base">
                2972 Westheimer Rd. Santa Ana, Illinois 85486
              </p>
              <span className="uppercase"> {'>'} Get Directions</span>
            </div>
            {/* <div className="text-base py-10 text-gray-400"></div> */}
            <hr class="h-px my-8 bg-gray-400 border-0 dark:bg-gray-700"/>
           <div className="flex flex-col md:flex-row md:space-y-0 space-y-8 md:space-x-40">
            <div className="flex flex-col">
              <Mail color={"#fbf9f9"} height="30px" width="30px" />
              <h1 className="headernav text-white md:text-3xl text-2xl">Email</h1>

              <p className="text-gray-400 text-base">
              hello@example.com
              </p>
            </div>
            <div className="flex flex-col">
              <Call color={"#fbf9f9"} height="30px" width="30px" />
              <h1 className="headernav text-white md:text-3xl text-2xl">Phone</h1>
              <p className="text-gray-400 text-base">
              (405) 555-0128
              </p>
            </div>
            </div>
          </div>
         

        </div>
      </div>
    </section>
  );
};

export default Contact;
