import React from 'react'
import Typed from 'react-typed';

const Body = () => {
  return (
    <><div className=' bg-gray-50 rounded-3xl text-black' id='gets'>
       
    <div className=' max-w-[900px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col '>
        
        
        <h1 className='  md:text-7xl sm:text-6xl text-4xl font-bold md:py-6 '>
        "Fueling Health, Nourishing Life"
            </h1>
        
        <div className='flex justify-center items-center'>
            
            <p className=' md:text-5xl sm:text-4xl text-xl font-bold py-4'>
                Fast, flexible services for
                </p>
            
            <Typed className=' 
            md:pl-4 md:text-5x sm:text-4xl text-xl font-bold text-[#00df9a]  pl-2 '
             strings={['DIET', 'HEALTH']} 
             typeSpeed={120} 
             backSpeed={140} 
             loop
              />
        </div>
       
        <p className=' font-mono  md:text-xl text-l font-bold text-gray-900 '>
   <p className='leading-loose first-letter:text-4xl'>At DEOL, we are dedicated to transforming lives through the power of nutrition and healthy living. </p>
   
   <p className='leading-loose first-letter:text-2xl'>  Whether you're looking to lose weight, manage a specific health condition, or simply adopt a more balanced diet, we're committed to providing evidence-based guidance and unwavering support every step of the way.</p>
   <p className=' leading-10 first-letter:text-2xl'>Welcome to DEOL, where your health is our priority.</p> 
        </p>
     
       
            
      
      </div>
      
      </div></>
  );
}

export default Body