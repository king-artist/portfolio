import React from 'react'

const LandingPage = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-0.3" className='w-full h-screen bg-zinc-900 pt-2'>
    <div className="textStructure mt-20 px-20">
        <div className="masker">
            <h1 className='uppercase text-9xl leading-none tracking-tighter font-bold'>
                We create Professional Websites
            </h1>
        </div>
    </div>
    <div className='border-t-[1px] border-zinc-800 mt-20 flex justify-between items-center px-20 py-2'>
        {[ "Professional Websites", "Data Analysis", "Digital Marketing"].map((item, index) => 
        (<p className='text-md font-light leading-none tracking-tight ' key={index}>{item}

        </p>))}

    </div>
    </div>
  )
}

export default LandingPage