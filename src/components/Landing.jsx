import { motion } from 'framer-motion'
import { Power4 } from 'gsap/all'
import React from 'react'

function Landing() {
  return (
    <div className='relative w-full h-[130vh]  sm:h-[250vh] '>
        <div  className='picture w-full h-full  overflow-hidden'>
            <img 
            data-scroll 
            data-scroll-speed ='-1'
             className='w-full h-full object-cover' src="https://a.storyblok.com/f/133769/1920x2716/5c24d6b467/exo-ape-hero-1.jpg/m/2400x3395/filters:quality(90)" alt="" />
        </div>
          <div className='w-full absolute top-0   '>
          <div className=' text max-w-screen-2xl mx-auto px-5 text-white sm:px-10 '>
            <div className='para mt-72 sm:mt-[32rem] '>
              {["Global digital design studio partnering", "with brands and busninesses that create","exceptional experiences Where peopel","live, work, and unwind."]
              .map((item,index) => {
                return (
                  <p key={index} className='text-md sm:text-3xl overflow-hidden '>
                  <motion.span 
                  initial={{rotate : 90, y: "100%" , opacity: 0}}
                  animate={{rotate: 0 , y: 0 , opacity:1}}
                  transition={{ease :[0.22 ,1,0.36,1], duration: .8 , delay: index*.2} }
                  className='inline-block origin-left'
                  >{item}</motion.span>
                  
                  </p>
                )
              })}
            
        
            </div>
                
            <div className='heading mt-10 sm:mt-10'>
              {["Digital", "Design", "Experience"].map((item,index)=>{
                return(
                  <h1 key={index} className='text-6xl  sm:text-[19rem] font-light tracking-tighter sm:py-5 sm:-mt-20 leading-none overflow-hidden'>
                    
                    <motion.span 
                  initial={{rotate : 90, y: "100%" , opacity: 0}}
                  animate={{rotate: 0 , y: 0 , opacity:1}}
                  transition={{ease :[0.22 ,1,0.36,1], duration: .8 , delay:1 + index*.15} }
                  className='inline-block origin-left'
                  >{item}</motion.span>
                    
                    </h1>
                )
               })} 
              
            </div>

            <div className='para2 sm:w-1/3 mt-20 sm:mt-20'>
                <p className='sm:text-xl'>
                    We help experinece-driven companies thrive by making their audience
                    feel the refined intricacies of their brand and product in the 
                    digital space . uforgettable journeys start with a click.
                </p>
                <a className='sm:text-xl border-b-[.3px] mt-20 inline-block border-zinc-100 pb-1' href="#">The Studio</a>
            </div>
        </div>
          </div>
        
      
    </div>
  )
}

export default Landing
