import { FooterDivider } from 'flowbite-react';
import React from 'react'
import { Star } from 'react-ionicons';

export const Hero4 = () => {
    return (
        <section className='mt-40'>
            <div className="container mx-auto  pt-4 relative">
                
                <img src='/Images/BG-2.jpg' className='md:h-[590px] h-full w-full object-center bg-gray-500 opacity-55 mix-blend-screen absolute md:w-full object-cover rounded-3xl items-center overflow-hidden'/>
            
            <div className='text-white text-center justify-center md:mx-12 mx-6 py-5 md:mt-32 wow animate__animated animate__slideInLeft '>
                <h1 className='text-center uppercase text-orange-500'>Testimonials</h1>
                <div className='items-center flex justify-center py-4  mx-auto'>
                    <Star color="white" size="24"/>
                    <Star color="white" size="24"/>
                    <Star color="white" size="24"/>
                    <Star color="white" size="24"/>
                    <Star color="white" size="24"/>
                </div>
                <p className='headernav text-base text-center py-8 md:text-4xl'>"Every item I purchased, from a wickedly<br/> realistic witch's hat to eerie decorations,<br/> exceeded my expectations. My Halloween<br/> celebrations have reached a whole new level of<br/> spooky fun. I'm already looking forward to next<br/> year's shopping spree!"</p>
                <img className='justify-center py-3 rounded-full mx-auto' src='/Images/avatar.jpg'/>
                <h1>Jane Warren</h1>
            </div>
           
            



            <FooterDivider  className='dividerline mx-auto mt-28 w-[92%]'></FooterDivider>
            </div>



        <div>
            </div>    
        </section>


        
    );

}

export default Hero4;

