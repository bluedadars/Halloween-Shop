import React, { Component } from 'react';

class Hero extends Component {
    render() {
        return (
            <section className=''>
                <div className="container mx-auto  pt-4 relative">
                    
                    <img src='/Images/hero-01.jpg' className='md:h-[590px] h-full w-full object-center bg-gray-500 opacity-55 mix-blend-screen absolute md:w-full object-cover rounded-3xl items-center overflow-hidden'/>
                
                <div className='text-white justify-center text-justify md:mx-12 mx-6 mt-6 md:mt-32  '>
                    <h1 className='md:text-left text-center'>NEW COLLECTION</h1>
                    <h1 className='md:text-8xl md:text-left text-4xl text-center headernav break-words'>HALLOWEEN <br></br> DECORATIONS </h1>
                    <p className='text-base md:text-left py-2 md:w-2/4 text-gray-400'>Whether you prefer the charm of classic Halloween decor or the thrill of modern and innovative designs, these decorations invite you to join in the celebration of all things eerie, enigmatic, and enchanting.</p>
                </div>
                <button className='text-white text-xs md:text-xl bg-[#E35701] p-2 rounded-lg md:w-36 w-28 md:mx-12 mx-28 mt-6 font-bold'>SHOP NOW</button>
                
    
    


                </div>
                
            </section>
            
        );
    }
}

export default Hero;