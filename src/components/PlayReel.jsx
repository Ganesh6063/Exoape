import React from 'react'

function PlayReel() {
  return (
    <div className='w-full h-screen overflow-hidden relative bg-black'>
        
        <div className='w-40 sm:w-96 aspect-video overflow-hidden  absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'> 
        <video muted loop autoPlay  className='absolute scale-[2.5] ute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
         src="
https://download-video.akamaized.net/v3-1/playback/334619e0-f92f-4627-ba88-dfe521b4e062/9e976370?__token__=st=1721217232~exp=1721231632~acl=%2Fv3-1%2Fplayback%2F334619e0-f92f-4627-ba88-dfe521b4e062%2F9e976370%2A~hmac=8e8784a746d714c78d83c4b788b72cd2d970f1e90ab29d45bb0f15fb5a596dab&r=dXMtY2VudHJhbDE%3D"></video>
        
       
        </div>
        
        <div className='overlay absolute w-full h-full text-white flex flex-col justify-between py-20'>
            <div className='w-full flex items-center justify-center gap-3 '>
            <svg data-v-669b4a84="" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4"><path data-v-669b4a84="" d="M7.41908 4.56679L6.13722 0L4.85418 4.92566L0 6L4.85418 7.25435L6.13722 12L7.3276 7.25435L12 6L7.41908 4.56679Z" fill="currentColor"></path></svg>
            <h3>Work in motion</h3>
            </div>
            <h1 className='w-full flex justify-center gap-32  sm:gap-96 items-center'>
                <div className='text-4xl sm:text-8xl font-light'>Play</div>
                <div  className='text-4xl sm:text-8xl font-light'>Reel</div>
            </h1>
            <p className='text-center px-10 text-xs'>Our work is best experienced in motion. Don't forget to put on your headphones.</p>
        </div>
      
    </div>
  )
}

export default PlayReel
