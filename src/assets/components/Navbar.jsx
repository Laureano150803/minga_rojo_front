import logo from '../../../public/img/Logo.svg'
import { useState } from 'react';
import Menu from './Menu';

export default function Navbar() {

  let [isOpen, setIsOpen]=useState(false)
  let toggleOpen  =()=>{
      setIsOpen(!isOpen);
  }
  return (
    <nav className='flex justify-between px-[2rem] pt-3'>
      <div className=' cursor-pointer' onClick={toggleOpen}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-[#F97316]">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </div>
      <img className='hidden md:block w-32' src={logo}/>
      <p className='md:hidden'>雪</p>
      {isOpen && <Menu close = {toggleOpen}/>}
    </nav>
  )
}
