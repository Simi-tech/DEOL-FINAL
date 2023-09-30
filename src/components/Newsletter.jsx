import React from 'react'


const Newsletter = () => {
  return (
    <div className='text-black bg-gray-50 w-full py-16 px-4' id='newsl'>
        <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
            <div className=' lg:col-span-2  my-4'>
               <h1 className='md:text-6xl sm:text-5xl text-4xl font-bold py-2'> Want tips for your diet?</h1>
                <p>Sign up to our newsletter and stay up to date.</p>
            </div>
            <div className='my-4'>
                <form  method='POST'>
                    <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
                    <input type='email' name='email' id='blck' className=' p-3 flex w-full rounded-md ' placeholder='Enter Email' />
                    <button type='submit' formTarget='_blank' className=' bg-[#00df9a] w-[200px] rounded-xl font-medium my-6 ml-4 px-6 py-3 text-black'>
                        Notify Me
                    </button>

                </div>
                </form>
                <p>We care about the protection of your data. Read our <span className='text-[#00df9a]'>Privacy Policy</span>.</p>
            </div>
        </div>
    </div>
  )
}

export default Newsletter