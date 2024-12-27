import { motion } from 'motion/react'
import React from 'react'

const About = () => {
  
  return (
    <div className='w-full p-20 bg-[#CDEA68] text-black'>
         <h1 className='font-serif text-6xl leading-[4.3vw] tracking-tight'  >
            Currently completing my B.Sc(hon's) in CSE from Barishal University. Fluently in English, Bangla. Highly Interested in learning New tech. Interest in Data Science And Cyber security
            . 
         </h1>
         <div className='flex gap-5 w-full border-t-[1px] pt-10 mt-20 border-[#41462b]'>
            <div className='w-1/2'>
              <h1 className='text-6xl'>Projects</h1>
              <button className='flex items-center gap-2 px-10 py-6 bg-zinc-900 mt-10 text-white rounded-full font-serif'> See more
                <div className='w-2 h-2 bg-zinc-100 rounded-full'></div>
              </button>
              
            </div>
            <motion.div 
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ ease:[0.76, 0, 0.24,1], duration: 5, repeat: 2, repeatType: 'reverse' }}
            className='w-1/2 h-[70vh] rounded-3xl overflow-hidden'>
            <img src="./public/img/gojo.jpg" className='h-[70vh] w-full' />
            </motion.div>
         </div>
    </div>
  )
}

export default About