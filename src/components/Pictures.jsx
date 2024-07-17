import React from 'react'

function Pictures() {
  return (
    <div className='w-full  h-[70vh] bg-white flex items-center justify-center overflow-hidden'>
        <div className='w-[40%] h-1/2 relative '>

        <div className='absolute -right-1/3 top-6 w-20 h-[7rem] '>
        <img className='w-full h-full object-cover' src="https://a.storyblok.com/f/133769/348x494/21becfd449/home-news-3.jpg/m/1200x1703/filters:quality(90)" alt="" /></div>

       <div className='absolute w-[8rem] -left-1/2 top-1/3 aspect-video'>
        <video muted loop autoPlay className='w-full h-full object-cover' src="https://a.storyblok.com/f/133769/x/9c433c7aac/home-news-diesel-be-a-follower.mp4"></video>
        </div>

        <div className='absolute w-[9rem] aspect-video -left-[70%] -bottom-10'>
        <img src="https://a.storyblok.com/f/133769/758x508/8a1ff60d00/home-news-4.jpg/m/1200x804/filters:quality(90)" alt="" />
        </div>

        <div className='absolute w-[10rem] aspect-[1.5/1] -right-[70%] -bottom-[37%]'>
         <video muted loop autoPlay src="https://a.storyblok.com/f/133769/x/88b4bf7989/news-rino-pelle.mp4"></video>
        </div>
        
        <img className='w-full h-full object-cover' src="https://a.storyblok.com/f/133769/748x1278/5784aa7150/home-news-1.jpg/m/700x1196/filters:quality(90)" alt="" />
        </div>
      
    </div>
  )
}

export default Pictures
