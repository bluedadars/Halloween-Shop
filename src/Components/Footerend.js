import { hover } from '@testing-library/user-event/dist/hover';
import { FooterDivider } from 'flowbite-react';
import React from 'react'
import { Bus, LockClosed, LogoFacebook, LogoInstagram, LogoTwitter, LogoYoutube, Pin, Star } from 'react-ionicons';

export const Footerend = () => {
  const currentYear = new Date().getFullYear();
  return (
    <section className=''>
            <div className="container flex mx-auto  pt-4 relative">
                
    
            <div className='text-white flex-row  text-center md:text-left justify-center md:mx-12 mx-6  '>
            <div className='flex md:justify-start py-6 justify-center'>
            <Bus color="white" width={'30px'} height={'30px'}/>
            </div>
                <h1 className='headernav text-center md:text-left uppercase text-2xl'>Free Shipping</h1>
                <div className=' flex'>
                   
                    
                <p className='text-base md:text-left text-center py-8 md:text-base text-gray-400'>Enjoy the treat of free shipping on all your Halloween must-haves</p>

            </div>
            
            </div>
            <div className='text-white flex-row  text-center md:text-left justify-center md:mx-12 mx-6  '>
            <div className='flex md:justify-start py-6 justify-center'>
            <LockClosed color="white" size="24" width={'30px'} height={'30px'}/>
            </div>
                <h1 className='headernav text-center md:text-left uppercase text-2xl'>Secure Payments</h1>
                <div className=' flex'>
                   
                    
                <p className='text-base md:text-left text-center py-8 md:text-base text-gray-400 '>Shop with confidence knowing that your payments are securely processed for a worry-free Halloween experience</p>

            </div>
            
            </div>
            <div className='text-white flex-row  text-center md:text-left justify-center md:mx-12 mx-6  '>
            <div className='flex md:justify-start py-6 justify-center'>
            <Pin color="white" size="24" width={'30px'} height={'30px'}/>
            </div>
                <h1 className='headernav text-2xl text-center md:text-left uppercase'>Order Tracking</h1>
                <div className=' flex'>
                   
                    
                <p className=' text-base md:text-left text-center py-8 md:text-base text-gray-400'>Stay in the know with real-time order tracking to ensure your Halloween treasures arrive right on time</p>

            </div>
            
            </div>
            
            </div>
            <FooterDivider  className='dividerline mx-auto mt-10 w-[92%]'></FooterDivider>

  <div class=" flex p-4 m-5">
  <a  class="flex items-center space-x-3 rtl:space-x-reverse">
      <img src="/Images/logo-icon.svg" class="h-8"/>
      <span class="self-center headernav  text-white">
        HALLOWEEN SHOP
      </span>
  </a>
  <div className='flex space-x-12 mx-auto justify-center'>
  <div className="md:w-0.5 md:h-6 md:bg-black"></div>
            <div className=" text-white text-md hover:text-[#E35701] divide-y-0 md:cursor-pointer">
              Home
            </div>
            <div className=" text-md text-white  hover:text-[#E35701]  md:cursor-pointer">
              Shop
            </div>
            <div className=" text-md text-white  hover:text-[#E35701]  md:cursor-pointer">
              About
            </div>
            <div className="  text-md text-white  hover:text-[#E35701]  md:cursor-pointer">
              Contact
            </div>
            </div>
            <div className='flex space-x-3 hover:fill-orange-600'>
            <LogoFacebook color={'white'} height="20px" width="20px"/>

            <LogoTwitter color={'white'} height="20px" width="20px"/>
            <LogoInstagram color={'white'} height="20px" width="20px"/>
            <LogoYoutube class='hover:text-orange-500' color={'white'} height="20px" width="20px"/>

            </div>
            
  </div>
  <FooterDivider  className='dividerline mx-auto mt-10 w-full'></FooterDivider>
  <div class="text-center text-base text-gray-300 py-4">
   &copy; {currentYear} HALLOWEEN SHOP | All rights reserved.
</div>
        </section>
  )
}
export default Footerend;
