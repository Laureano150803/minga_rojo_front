import logo from '../../../public/img/Logo.svg'

export default function Navbar() {
  return (
    <nav>
    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
      <button data-collapse-toggle="navbar-hamburger" type="button" className="inline-flex items-center ml-3 text-sm  rounded-lg hover:bg-gray-100  focus:ring-2  dark:text-[#F97316] dark:hover:bg-white" aria-controls="navbar-hamburger" aria-expanded="false">
        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
      </button>
      <a href="#" className="flex items-center">
        <p className='text-xl md:hidden'>雪</p>
        <img className='hidden w-28 md:block' src={logo} alt=""/>
        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"></span>
      </a>
    </div>
  </nav>
  )
}
