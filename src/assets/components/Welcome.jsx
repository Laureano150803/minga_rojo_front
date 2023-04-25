export default function Welcome() {
  return (
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
  )
}
