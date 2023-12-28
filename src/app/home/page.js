import React from 'react'
import '../home/page.css'
// import logo from '../../../public/Gold.jpg'
import logo2 from '../../../public/logo.png'
import Image from 'next/image'


const home = () => {
  return (
    <div className='home_div'>
     <div className='video_div_logo_navbar'>
      <video className='video_tag' autoPlay  muted  loop  src={require('../../../public/beef.mp4')} />
      <div className='logo_div'>
       <Image
        src={logo2}
        alt='loading'
        className='logo'
        />

      </div>
     </div>
    </div>
  )
}

export default home