import React from 'react'

const Bio = () => {
  return (
    <div  className=' w-full h-screen overflow-hidden flex items-center justify-center'>
        <div data-scroll data-scroll-section data-scroll-speed="-0.7" className='relative w-2/3 h-screen bg-zinc-900 '>
        <div className='absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-full bg-no-repeat bg-center rounded-full bg-[url("./public/img/reratul.jpg")]'></div></div>

    </div>
  )
}

export default Bio