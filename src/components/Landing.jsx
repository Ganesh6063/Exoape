import React from 'react'

function Landing() {
  return (
    <div className='relative w-full h-[150vh]  sm:h-[250vh] '>
        <div className='picture w-full h-full '>
            <img className='w-full h-full object-cover' src="https://a.storyblok.com/f/133769/1920x2716/5c24d6b467/exo-ape-hero-1.jpg/m/2400x3395/filters:quality(90)" alt="" />
        </div>
          <div className='w-full absolute top-0   '>
          <div className=' text max-w-screen-2xl mx-auto px-5 text-white sm:px-10 '>
            <div className='para mt-72 sm:mt-[35rem]'>
            <p className='text-md sm:text-3xl '>Global digital design studio partnering</p>
            <p className='text-md sm:text-3xl'>with brands and busninesses that create</p>
            <p className='text-md sm:text-3xl'>exceptional experiences Where peopel</p>
            <p className='text-md sm:text-3xl'>live, work, and unwind.</p>
            </div>

            <div className='heading mt-5 sm:mt-10'>
                <h1 className='text-6xl  sm:text-[19rem] font-light tracking-tighter leading-none'>Digital</h1>
                <h1 className='text-6xl  sm:text-[19rem] font-light tracking-tighter leading-none'>Design</h1>
                <h1 className='text-6xl  sm:text-[19rem] font-light tracking-tighter leading-none'>Experience</h1>
            </div>

            <div className='para2 sm:w-1/3 mt-10 sm:mt-20'>
                <p className='sm:text-xl'>
                    We help experinece-driven companies thrive by making their audience
                    feel the refined intricacies of their brand and product in the 
                    digital space . uforgettable journeys start with a click.
                </p>
                <a className='sm:text-xl border-b-[.3px] mt-10 inline-block border-zinc-100 pb-1' href="#">The Studio</a>
            </div>
        </div>
          </div>
        
      
    </div>
  )
}

export default Landing
