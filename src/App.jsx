import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='container overflow-x-hidden'>
      <div className=' max-h-[50vh] w-screen bg-no-repeat   bg-cover bg-[url(/src/assets/img/back.svg)] text-white'>

       <nav>
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <button data-collapse-toggle="navbar-hamburger" type="button" class="inline-flex items-center p-2 ml-3 text-sm  rounded-lg hover:bg-gray-100  focus:ring-2  dark:text-[#F97316] dark:hover:bg-white" aria-controls="navbar-hamburger" aria-expanded="false">
            <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
          </button>
          <a href="#" class="flex items-center">
            <img src="/src/assets/img/Logo.svg" class="h-8 mr-3" alt="Flowbite Logo" />
            <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"></span>
          </a>
        </div>
      </nav> 
      <div className=' w-2/5 h-60 flex justify-around'>
      <div className='flex  items-end'>
      <div className='pb-4 flex flex-col flex-wrap'>
          <h1 className='text-4xl font-bold'>For the love of manga</h1>
          <p>Explore our varieties</p>
          <p>#MingaLove❤</p>
          <div className='mt-3'>
            <a className="text-orange-500 rounded px-14 py-2  bg-white" href="#">Let's go</a>
          </div>
        </div>   
      </div>
      </div>
      </div>
      <div className=' w-screen h-60  flex justify-center items-center'>
        <div className='bg-[#F97316] h-[10rem] rounded-sm w-[90%]  flex justify-evenly' >
            <img className='' src="/src/assets/img/monita.svg"/>
          <img src="/src/assets/img/one.png"/>
          <div className='text-white text-xs flex flex-col justify-center'>
              <h5 className='text-base font-bold'>Shonen</h5>
              <p className='w-[18rem]'>Shonen Is the manga that is aimed at adolescent boys. They are series with large amounts of action, in which humorous situations often occur. The camaraderie between members of a collective or a combat team stands out.</p>
          </div>
        </div>
      </div>
    <footer className='w-screen'>
      <div>
        <img className='w-[100%] h-[12rem]'  src="/src/assets/img/footer.png" /> 
      </div> 
      <div className='flex justify-around flex-wrap '>
        <div>
            <a className='mr-6' href="#">Home</a>
            <a href="#">Mangas</a>
        </div>
        <div className='flex text-3xl '>
            <h2 className='text-orange-500'>Minga </h2>
            <p>雪</p>
        </div>
        <div className='w-[20rem]'>
          <div className='flex justify-around'>
            <img src="/src/assets/img/Facebook.png"  />
            <img src="/src/assets/img/Twitter.png"  />
            <img src="/src/assets/img/Vimeo.png" />
            <img src="/src/assets/img/Youtube.png"  />
          </div>
          <div className='flex justify-center'>
            <input className='text-white mt-2 bg-[#F97316] py-3 px-[7rem] rounded' type="submit" value="Donate"/>
          </div>
        </div>
      </div>
       
    </footer>
    </div>
    
    </>
  )
}

export default App
