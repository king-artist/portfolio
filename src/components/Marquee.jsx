import { motion } from 'motion/react'
import React from 'react'

const Marquee = () => {
    
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".1" className='w-full py-10 bg-green-950 '>
        <div className="text border-t-2 border-b-2 border-zinc-100 flex whitespace-nowrap overflow-hidden">
            
            <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease: "linear", repeat: Infinity, duration: 15}} className='text-[20vh] text-slate-100 leading-none font-mono font-semibold'>
                Hire me! For Your next project.
            </motion.h1>
            <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease: "linear", repeat: Infinity, duration: 15}} className='text-[20vh] text-slate-100 leading-none font-mono font-semibold'>
                Hire me! For Your next project.
            </motion.h1>
            
            
            
        </div>
    
    
    </div>
  )
}

export default Marquee