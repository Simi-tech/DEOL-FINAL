import React from 'react'
import food2 from '../Assets/food2.png'
import Typed from 'react-typed';
import { Link} from 'react-scroll';

const Getstarted = () => {
  return (
    <div className='w-full bg-white py-16 px-4' id='body'>
        <div className=' max-w-[1000px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center '>
        
            <div className='flex flex-col justify-center'>
            <p className='text-[black] font-bold p-2'>
             DEOL NUTRITION AND DIETETICS CONSULTANCY
        </p>
                <h1 className='text-[#00df9a] md:text-7xl sm:text-6xl text-4xl font-bold md:py-6 '>
                PLAN YOUR DIET
                </h1>
                <img className='w-[350px] mx-auto my-4' src={food2} />
                <p className='text-l font-bold'>We diagnose, assess and treat your dietary and nutritional issues.
                     We help our clients understand important information about their
                      health and focus on 
                     practical actions to address nutrition needs, as well as the benefits 
                     of their behavior change
                                      </p>

                
            </div>    
              <Link
        activeClass='active'
        to='cards'
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
        <button className=' bg-[black] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-white'>
            Get Started
            </button>
      </Link>
           
        </div>
        
    </div>
  )
}

export default Getstarted