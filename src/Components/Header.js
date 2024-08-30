import React, { useState } from "react";
import { CartOutline, CloseOutline, MenuOutline, Navigate } from "react-ionicons";
const Header =()=> {
  let [toggle,setToggle] = useState(false);
  const handler=()=>{
setToggle(!toggle);
console.log("cliked")
  }

        return (
<div>
<nav class=" border-gray-200 md:mx-auto text-xl text-white">
  <div class=" flex flex-wrap items-center justify-between md:mx-auto p-4">
  <a  class="flex items-center space-x-3 rtl:space-x-reverse">
      <img src="/Images/logo-icon.svg" class="h-8"/>
      <span class="self-center headernav  text-white">
        HALLOWEEN SHOP
      </span>
  </a>
  <div
            className="Drawer inline-block text-white p-4 md:hidden text-[20px]"
            onClick={handler}
          >
 { toggle ?
 <CloseOutline
 color={'#f4f0f0'} 
 height="30px"
 width="30px"
/>
:
 <MenuOutline
  color={'#00000'} 
  height="30px"
  width="30px"
/>

}
           
          </div>
       
       <div
            className={
              toggle
                ? " relative  ease-in-out duration-100 items-center text-left divide-y-2 inset-0 w-full overflow-hidden h-fit bg-[#f3772a]   mt-4"
                : "absolute  items-center w-fit inset-0 md:w-auto md:static md:flex mx-4 space-x-2 -translate-x-96 md:-translate-x-0"
            }
          >
            <div className="md:w-0.5 md:h-6 md:bg-black"></div>
            <div className="fitem px-6 text-md md:px-3 py-6 md:py-0 hover:text-[#E35701] md:hover:underline divide-y-0 hover:underline-offset-8 md:cursor-pointer">
              Home
            </div>
            <div className="fitem px-6 text-md md:px-3 py-4 space-y-4 hover:text-[#E35701] md:hover:underline  hover:underline-offset-4 md:cursor-pointer">
              Shop
            </div>
            <a>
            <div className="fitem px-6 text-md md:px-3 py-4 md:py-0 hover:text-[#E35701] md:hover:underline  md:hover:underline-offset-4 md:cursor-pointer">
              <a href="/about">
              About
              </a>
            </div>
            </a>
            <div className="fitem px-6 text-md md:px-3 py-4 md:py-0 hover:text-[#E35701] md:hover:underline  md:hover:underline-offset-4 md:cursor-pointer">
              Contact
            </div>
<div className="hidden md:flex">
            <CartOutline
  color={'#f3772a'} 
  height="30px"
  width="30px"
/>       </div>   
          </div>
  </div>
</nav>
            </div>
      );
    
};

export default Header;