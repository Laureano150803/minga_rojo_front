import Footer from './assets/components/Footer'
import Navbar from './assets/components/Navbar'

import Welcome from './assets/components/Welcome'
export default function Main() {
  return (
    <>
     <div className='overflow-x-hidden'>
      <div className=' h-screen w-screen bg-center bg-cover bg-no-repeat  bg-[url(/public/img/back.svg)] text-white   md:h-[50vh]'>
       <Navbar/>
        <Welcome/>
      </div>
       <Footer/>
    </div> </>
  )
}
