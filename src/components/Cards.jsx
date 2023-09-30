import React from 'react'
import single from '../Assets/single.png'
import double from '../Assets/double.png'
import triple from '../Assets/triple.png'

const Cards = () => {
  return (
    <div className='w-full py-[10rem] px-4 bg-gray-white' id='cards'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
            <div className='w-full border shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                <img className=' w-20 mx-auto mt-[-3rem] bg-white' src={single} alt="" />
                <h2 className='text-2xl font-bold text-center py-8'>Single User</h2>
                <p className='text-center text-2xl font-bold'>NGN4000</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>1 Granted User</p>
                    <p className='py-2 border-b mx-8'>Personalized tips</p>
                </div>
                <button className=' bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'> <a href="https://paystack.com/pay/ln4l733966">Book Now</a></button>
            </div>
            <div className='w-full border bg-gray-100 shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                <img className='bg-transparent w-20 mx-auto mt-[-3rem] bg-white' src={double} alt="" />
                <h2 className='text-2xl font-bold text-center py-8'>Partners</h2>
                <p className='text-center text-2xl font-bold'>NGN5500</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>2 Granted Users</p>
                    <p className='py-2 border-b mx-8'>Personalized tips for each user</p>
                </div>
                <button className=' bg-[black] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-[#00df9a]'> <a href="https://paystack.com/pay/ln4l733966">Book Now</a></button>
            </div>
            <div className='w-full border shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                <img className=' w-20 mx-auto mt-[-3rem] bg-white' src={triple} alt="" />
                <h2 className='text-2xl font-bold text-center py-8'>Family</h2>
                <p className='text-center text-2xl font-bold'>NGN6500</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>Up to 6 Granted Users</p>
                    <p className='py-2 border-b mx-8'>Personalized tips for each user</p>
                </div>
                <button className=' bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'> <a href="https://paystack.com/pay/lz3518nbjs">Book Now</a></button>
            </div>
        </div>
    
    </div>
  )
}

  

export default Cards