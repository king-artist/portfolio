import React from 'react'
import Navbar from './components/Navbar'
import LandingPage from './components/LandingPage'
import Marquee from './components/Marquee'
import About from './components/About'
import LocomotiveScroll from 'locomotive-scroll';
import Bio from './components/Bio'
const App = () => {
  

  

  const locomotiveScroll = new LocomotiveScroll();
  

  return (
    <div className='w-full h-screen bg-zinc-900 text-white'>
      <Navbar />
      <LandingPage />
      <Marquee  />
      <About />
      <Bio />
      </div>
  )
}

export default App