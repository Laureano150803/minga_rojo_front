import { useState } from 'react'
import Footer from '../components/Footer'
import Menu from '../components/Menu'
import Navbar from '../components/Navbar'
import Welcome from '../components/Welcome'
import Index from '../pages/Index'


export default function Main() {
       
   
   

  return (
    <>
     <div className='overflow-x-hidden'>
      <div className=' h-screen w-screen bg-center bg-cover bg-no-repeat  bg-[url(/public/img/back.svg)] text-white   md:h-[70vh]'>
       <Navbar/>
      
        <Welcome/>
      </div>
        <Index/>
       <Footer/>
    </div> </>
  )
}
