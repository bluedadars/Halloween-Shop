import { FooterDivider } from 'flowbite-react';
import React, { Component, useEffect } from 'react';
import WOW from "wowjs";
const Hero2= ()=> {
    useEffect(() => {
        new WOW.WOW().init();
      }, [])
        return (
            <div className=''>
                <div className=' mt-52'>
                    <img src='/Images/BG-3.jpg' className=' h-full w-full absolute mix-blend-screen object-cover'/>
                    <h1 className='wow animate__animated animate__fadeInUpBig text-center text-sm md:text-xl uppercase tracking-wider font-bold text-[#f7660B]'>Sweets</h1>
                    <h1 className='wow animate__animated animate__fadeInUpBig headernav text-center text-2xl md:text-6xl py-2 uppercase'>Halloween Candy Packs</h1>
                </div>
                <FooterDivider className='w-12 mx-auto mt-4 content-center'/>
            <div class="relative flex flex-col items-center max-w-screen-xl px-4 mx-auto md:flex-row sm:px-6 p-8">
    <div class="flex items-center py-5 md:w-1/2 md:pb-20 md:pt-10 md:pr-10">
        <div class="text-left wow animate__animated animate__fadeInUpBig">
            <h2
                class="headernav w-3/4 md:text-left text-center text-2xl uppercase mx-auto  leading-10 tracking-tight text-[#f7660B]  md:text-4xl">
              a sprinkle of magic to every trick-or-treat adventure
            </h2>
            <p class=" mx-auto text-sm text-center md:text-left w-3/4 mt-3 text-gray-500  md:mt-5 md:text-xl md:max-w-3xl">
            From the classic to the creatively creepy, Halloween candies remind us that the true essence of this holiday lies in the delightful experience of indulging in sweet surprises with friends and family.
            </p>
            <div class="mt-5 sm:flex md:mt-8 mx-24">
            <button className='text-white text-base mx-auto md:mx-0 bg-[#E35701] p-2 rounded-lg md:w-36 w-28  mt-6 font-bold'>SHOP NOW</button>
            </div>
        </div>
    </div>
    <div class="flex py-5 md:w-1/2 w-screen md:pb-20 md:pt-10 md:pl-10">
        <div class=" p-3  md:p-8">
            <div class=" rounded-lg bg-white text-black w-full">
                <img className='rounded-lg' src="/Images/product-0010.jpg"/>
            </div>
        </div>
    </div>
</div>
<FooterDivider  className='dividerline mx-auto mt-28 w-[92%]'></FooterDivider>
</div>

        );
    
}

export default Hero2;