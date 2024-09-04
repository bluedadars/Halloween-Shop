import React from 'react'
import { items, items3 } from './Data';
import { FooterDivider } from 'flowbite-react';

export const Card3 = () => {
    return (
        <div> 
            <div className='mt-52'>
                <img src='/Images/BG-1.jpg' className=' h-full w-full absolute mix-blend-screen object-cover'/>
                <h1 className='wow animate__animated animate__fadeInUpBig text-center md:text-xl text-xs uppercase tracking-wider font-bold text-[#f7660B]'>Most Delicious</h1>
                <h1 className='wow animate__animated animate__fadeInUpBig headernav text-center text-2xl md:text-6xl py-2 uppercase'>Candies & Cookies</h1>
            </div>
            <FooterDivider className='w-12 mx-auto mt-6 content-center'/>   
    <div className='grid grid-cols-1 md:grid-cols-3'>
    {
        items3.map((product)=>{
            return(
            <>
             <div class="p-4 dark:bg-slate-800">
    <div class="">
        
        <div class="md:w-[400px] w-screen h-fit shadow-lg duration-300 hover:scale-105 wow animate__animated animate__slideInUp">
            <div class=" relative p-4">
                <a href=""><img class="md:w-full md:h-full object-cover" src={product.imgSrc3} alt=""/></a>
                <div class="  rounded-l-lg flex items-center justify-center absolute top-4 right-auto">
                    <p class="text-xl text-white px-2">20% off</p>
                </div>
                <div class="absolute hidden my-4 p-2 text-sm text-white bg-blue-400 rounded-r-lg shadow-lg group-hover:block duration-300 bottom-0 mb- whitespace-nowrap">
                    <p>Click to view more details</p>
                </div>
            </div>
            <div>
                

<div class="flex items-center ml-2">
<svg class="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
</svg>
<svg class="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
</svg>
<svg class="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
</svg>
<svg class="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
</svg>
<svg class="w-4 h-4 ms-1 text-gray-300 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
</svg>
</div>

            </div>
            <div class=" p-4">
                <div class="md:text-2xl font-semibold">
                    <h2 className='headernav text-white'>{product.title3}</h2>
                </div>
                
              
                 <div class="md:text-base text-xs text-orange-500 font-bold mt-1">
                    <p>{product.price3}</p>
                 </div>
                 <div class="mt-2">
                    <button class=" bg-[#E6600B] text-white uppercase md:w-36 w-28 text-xs md:text-base md:font-medium p-2 rounded-lg opacity-90 hover:opacity-100">add to cart</button>
                 </div>
            </div>
        </div>
        </div>
        </div>
    
            </>
            )
        })
    }    
    </div>    
 
 <FooterDivider  className='dividerline mx-auto mt-28 w-[92%]'></FooterDivider>
 
        </div>
    );
}


export default Card3;

