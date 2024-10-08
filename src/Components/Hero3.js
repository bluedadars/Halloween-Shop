import React from 'react'

export const Hero3 = () => {
    return (
        
            <div className="container mx-auto mt-40  pt-4 relative">
                <div className='flex mx-auto'>
                <img src='/Images/bg-07.jpg' className='md:h-[590px] h-full object-center bg-gray-500 opacity-55 mix-blend-screen absolute md:w-screen object-cover rounded-3xl items-center overflow-hidden'/>
                </div>
            <div className='text-white justify-center text-justify md:mx-12 mx-6 py-5 md:mt-32 wow animate__animated animate__slideInLeft '>
                <h1 className='md:text-left text-center'>NEW COLLECTION</h1>
                <h1 className='md:text-6xl md:text-left text-2xl text-center mt-5 headernav break-words'>Ceramic Halloween <br></br> DECORATIONS </h1>
                <p className='text-base md:w-2/4 text-center md:text-left py-8 text-gray-400'>From intricately designed ceramic pumpkins with whimsical smiles to hauntingly beautiful ceramic witch figurines, these decorations serve as captivating focal points in any Halloween display.</p>
            </div>
            <div className='flex justify-center md:justify-start'>
            <button className='text-white text-base bg-[#E35701] p-2 rounded-lg md:w-36 w-28 md:mx-12 mt-6 font-bold wow animate__animated animate__slideInLeft'>SHOP NOW</button>
            </div>




            </div>
            
      
        
    );

}

export default Hero3;

