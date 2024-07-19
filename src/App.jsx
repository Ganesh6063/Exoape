import React from 'react'
import Navbar from './components/Navbar'
import Landing from './components/Landing'
import Work from './components/Work'
import PlayReel from './components/PlayReel'
import Pictures from './components/Pictures'
import Spread from './components/Spread'
import Footer from './components/Footer'
import LocomotiveScroll from 'locomotive-scroll';




function App() {
  
  

const scroll = new LocomotiveScroll();

  return (
    <div className='w-full '>
      <Navbar/>
      <Landing/>
      <Work />
      <PlayReel/>
      <Pictures/>
      <Spread/>
      <Footer/>

    </div>
  )
}

export default App
