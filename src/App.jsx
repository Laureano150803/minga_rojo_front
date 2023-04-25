import { useState } from 'react'
import apiUrl from '../api'
import './App.css'

//components
import Footer from './assets/components/Footer'
import Navbar from './assets/components/Navbar'
import Index from './assets/pages'
import Welcome from './assets/components/Welcome'
//-----------------------------------------------





function App() {
  const [count, setCount] = useState(0)
  
  return (
    <>
    <div className='overflow-x-hidden'>
      <div className=' h-screen w-screen bg-center bg-cover bg-no-repeat  bg-[url(/public/img/back.svg)] text-white   md:h-[50vh]'>
       <Navbar/>
        <Welcome/>
      </div>
      <Index/>
      
       <Footer/>
    </div> 
    </>
  )
}


export default App
