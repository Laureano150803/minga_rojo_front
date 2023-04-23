import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='overflow-x-hidden'>
      <div className=' h-screen w-screen bg-center bg-cover bg-no-repeat  bg-[url(/src/assets/img/back.svg)] text-white   md:h-[50vh]'>
        <nav>
          <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
            <button data-collapse-toggle="navbar-hamburger" type="button" class="inline-flex items-center ml-3 text-sm  rounded-lg hover:bg-gray-100  focus:ring-2  dark:text-[#F97316] dark:hover:bg-white" aria-controls="navbar-hamburger" aria-expanded="false">
              <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
            </button>
            <a href="#" class="flex items-center">
              <p className='text-xl md:hidden'>雪</p>
              <img className='hidden w-28 md:block' src="/src/assets/img/logo.svg" alt=""/>
              <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"></span>
            </a>
          </div>
        </nav>
        <div className='flex items-center  h-[90%] justify-center  w-screen text-center md:text-left md:justify-start md:pl-10 lg:pl-[10rem]'>
          <div>
            <h1 className='text-4xl font-bold'>For the love of manga</h1>
            <p>Explore our varieties</p>
            <p className='hidden md:block' >#MingaLove❤</p> 
            <div className='mt-3' >
              <a className="text-orange-500 rounded px-28 py-2 md:px-12  bg-white" href="#">Let's go</a>
            </div>
          </div>   
        </div>
      </div>
      <div className='hidden md:block w-screen h-60 mt-7'>
        <div className='flex justify-center'>
          <div className='bg-gradient-to-b from-[#FF5722]  to-[#F97316] h-[10rem] rounded-sm w-[90%]  flex justify-evenly' >
              <img className='relative bottom-5' src="/src/assets/img/monita.svg"/> 
              <img className='relative bottom-5' src="/src/assets/img/one.png"/>
            <div className='text-white text-xs flex flex-col justify-center flex-wrap'>
              <h5 className='text-base font-bold'>Shonen</h5>
              <p className='w-[18rem]'>Shonen Is the manga that is aimed at adolescent boys. They are series with large amounts of action, in which humorous situations often occur. The camaraderie between members of a collective or a combat team stands out.</p>
            </div>
          </div>
        </div>
      </div>
      <footer className='hidden md:block w-screen  mb-10'>
        <div className='mb-14'>
          <img className='w-screen h-[12rem]'  src="/src/assets/img/footer.png"/> 
        </div> 
        <div className='flex justify-center'>
          <div className='flex justify-between flex-wrap mb-3 border-b-2 border-gray-300   w-[80%]'>
            <div>
              <a className='mr-6' href="#">Home</a>
              <a href="#">Mangas</a>
            </div>
            <div className='flex text-3xl '>
              <h2 className='text-orange-500'>Minga </h2>
              <p>雪</p>
            </div>
            <div className='w-[10rem] mb-3 relative bottom-6'>
              <div className='flex justify-around'>
                <img src="/src/assets/img/Facebook.png"  />
                <img src="/src/assets/img/Twitter.png"  />
                <img src="/src/assets/img/Vimeo.png" />
                <img src="/src/assets/img/Youtube.png"  />
              </div>
              <div className='flex justify-center'>
                <button className='text-white mt-2 bg-gradient-to-b from-[#FF5722] flex  to-[#F97316] py-1 px-[3rem] rounded'>Donate <img className='w-3 relative top-2 left-2' src="/src/assets/img/Union.png" /> </button>
              </div>
            </div>
          </div>
        </div>
    </footer>
    </div> 
    </>
  )
}


export default App
