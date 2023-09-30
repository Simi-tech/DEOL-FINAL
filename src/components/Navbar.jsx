import React, {useState} from 'react'
import {AiOutlineClose, AiOutlineMenu  } from 'react-icons/ai'
import { Link} from 'react-scroll';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


const Navbar = () => {
      const [nav, setNav] =useState(false);
      const handleNav = () => {
        setNav(!nav )
      };

  return (
    <div className=' flex justify-between items-center h-15 max-w-[100%] mx-auto px-4 text-[#000300] sticky top-0 z-50 bg-[white]'>
        <h1 id='abt' className='w-full  text-3xl font-bold text-[#00df9a] '>
        
          <a href="/">DEOL.</a></h1>
          <ul className='hidden md:flex'>
            <li id='abt' className=' p-4'>
            <Link
        activeClass='active'
        to='body'
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
        Home
      </Link>
              </li>
            <li id='abt' className=' p-4'>
          
              <Link
        activeClass='active'
        to='gets'
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
        About
      </Link>
          
            </li>
            <li id='abt' className=' p-4'> <Link
        activeClass='active'
        to='foots'
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >Contact
      </Link>
      </li>
            <li className=' p-4'>
            <Link
        activeClass='active'
        to='cards'
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
        <button className='bg-[#00df9a] w-[90px] rounded-md font-medium  py-1  text-white' >Sign Up</button>
      </Link>
            </li>
          </ul>

        <div onClick={handleNav} className='block md:hidden'>
          {!nav ? <AiOutlineMenu size={20} /> : <AiOutlineClose size={20} /> }
         
        </div>
        
        <div className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r  text-gray-900 bg-[white] ease-in-out duration-500' : 'fixed left-[-100%]' }>
        <h1 className='w-full  text-3xl font-bold text-[#00df9a]'>
            <Link
        activeClass='active'
        to='body'
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
        DEOL.
      </Link></h1>
            <ul className=' p-4 uppercase '>
              <li className=' border-b border-t p-4'>  
                <Link
        activeClass='active'
        to='body'
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
        Home
      </Link>
      </li>
              <li className=' border-b p-4'>   
               <Link
        activeClass='active'
        to='gets'
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
        About
      </Link>
      </li>
              <li className=' border-b p-4'>
                    <Link
        activeClass='active'
        to='newsl'
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
        Contact
      </Link>
      </li>
            </ul>
        </div>
    </div>
  )
}



export default Navbar 