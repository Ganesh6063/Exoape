import React from 'react'

function Footer() {
  return (
    <div className='w-full min-h-screen bg-black relative flex flex-col items-center justify-center '>
        <div className='absolute w-[55%] h-[20vh] sm:w-[60%] sm:h-[40%] top-20    right-5 overflow-hidden '>
            < video muted loop autoPlay className='w-full h-full bg-inherit object-cover asepect-[1.5]' src="https://www.exoape.com/video/video-6.mp4"></video>
        </div>
        <div className='z-[999] text-[#e0ccbb] mt-0 sm:absolute sm:top-0 sm:h-fit w-full h-[80vh] sm:px-32 px-10'>
               <div className='w-[30%] sm:w-1/2 sm:h-fit'>
                <h1 className='text-6xl sm:text-[10.5rem]  text-boldl  text-[#e0ccbb]  tracking-tighter '>Our</h1>
                <h1 className='text-6xl sm:text-[10.5rem]  text-bold  text-[#e0ccbb]  tracking-tighter'>Story</h1>
               </div>  
               <p  className='mt-5 text-lg sm:text-2xl sm:w-[40%] sm:mt-20 text-[#e0cdbdcc] font-semibold'>The story behind Exo Ape is one of exploration, creativity and curiosity.</p>
               <a  className='mt-5 sm:hidden inline-block border-b-[1px] border-[#e0ccbb]' href="#">Our Story</a>
               <hr className='border-[1px] border-[#e0ccbb] sm:mt-20 mt-8' />
               <div className='w-full h-[50%]  sm:w-[50%] sm:justify-evenly sm:items-center sm:flex  flex   justify-between mt-5 '>
                <div className='hidden sm:block sm:flex-col sm:flex sm:mr-20 sm:gap-3 '>
            
                    <a className='sm:mt-5' href="">Willem || Singel 8</a>
                        <a href="">6041HS,Roermond</a>
                       <a href="">The Netherland</a>
                    <a href="#">GaneshDev@gmail.com</a>
                </div>
                <div className='flex flex-col gap-2 w-[50%] h-full '>
                 <a className='mt-5 ' href="">Work</a>
                 <a href="">Studio</a>
                 <a href="">News</a>
                 <a href="">Contact</a>

                </div>
                   <div className=' w-[50%] h-full flex flex-col gap-2  '>
                   <a className='mt-5 ' href="">Behance</a>
                   <a href="">Dribble</a>
                   <a href="">Twitter</a>
                   <a href="">Instagram</a>
                   </div>

               </div>

            
       
        </div>

        
        
        
      
    </div>
  )
}

export default Footer
