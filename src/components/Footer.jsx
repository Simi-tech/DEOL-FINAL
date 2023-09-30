import React from 'react'
import { 
        FaDribbbleSquare,
        FaFacebookSquare,
        FaGithubSquare,
        FaInstagram,
        FaPhone,
        FaTwitterSquare,
 } from 'react-icons/fa';

const Footer = () => {
  return (
    <div id='foots' className='w-full] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-white bg-neutral-800 '>
        <div>
            <h1 className='w-full  text-3xl font-bold text-[#00df9a]'>
                DEOL
            </h1>
            <p className='py-4'>
                No 122, Iworoko Road,Ado-Ekiti
               <div className='flex'> <FaPhone size={20}/>   (+234) 80-338-9652</div>
               deolmulticoncepts@gmail.com
            </p>
            <div className='flex md:w-[75%] my-6 px-2'>
                <FaFacebookSquare size={30}/>
                <FaInstagram size={30}/>
                <FaTwitterSquare size={30}/>
              
            </div>
        </div>
    </div>
  )
}

export default Footer