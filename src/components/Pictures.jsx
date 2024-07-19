import gsap, { Linear, ScrollTrigger } from 'gsap/all';
import React, { useEffect, useRef } from 'react'

function Pictures() {
  const parent = useRef(null);  
  const first = useRef(null);  
  const second = useRef(null);  
  const thr = useRef(null);  
  const forth = useRef(null);

  useEffect(()=>{
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: parent.current,
        start:"0 90%",
        scrub:1
      }
    });
    tl.to(first.current,{
      x:"50%",
      ease:Linear
    },'a')
    tl.to(second.current,{
      x:"-50%",
      ease:Linear
    },'a')
    tl.to(thr.current,{
      x:"-50%",
      ease:Linear
    },'a')
    tl.to(forth.current,{
      x:"50%",
      ease:Linear
    },'a')
  })


   
  return (
    <div  className='w-full  h-[70vh] sm:h-[100vh] bg-white flex items-center justify-center overflow-hidden'>
        <div ref={parent} className='w-[40%] sm:w-[20%] sm:h-[70%] h-1/2 relative '>

        <div ref={first} className='absolute -right-1/3 top-6 sm:w-40 sm:h-[15rem] w-20 h-[7rem] '>
        <img className='w-full h-full object-cover' src="https://a.storyblok.com/f/133769/348x494/21becfd449/home-news-3.jpg/m/1200x1703/filters:quality(90)" alt="" /></div>

       <div ref={second} className='absolute w-[8rem] sm:w-[20rem] -left-1/2 sm:-left-3/4 top-1/3 aspect-video'>
        <video muted loop autoPlay className='w-full h-full object-cover' src="https://a.storyblok.com/f/133769/x/9c433c7aac/home-news-diesel-be-a-follower.mp4"></video>
        </div>

        <div ref={thr} className='absolute w-[6rem] sm:w-[17rem] aspect-video -left-[40%] sm:-left-[50%] -bottom-10'>
        <img src="https://a.storyblok.com/f/133769/758x508/8a1ff60d00/home-news-4.jpg/m/1200x804/filters:quality(90)" alt="" />
        </div>

        <div ref={forth} className='absolute w-[8rem]  sm:w-[15rem] aspect-video -right-[50%] sm:-right-[70%] -bottom-[30%] sm:-bottom-[20%]'>
         <video muted loop autoPlay src="https://a.storyblok.com/f/133769/x/88b4bf7989/news-rino-pelle.mp4"></video>
        </div>
        
        <img  className='w-full h-full object-cover' src="https://a.storyblok.com/f/133769/748x1278/5784aa7150/home-news-1.jpg/m/700x1196/filters:quality(90)" alt="" />
        </div>
      
    </div>
  )
}

export default Pictures
