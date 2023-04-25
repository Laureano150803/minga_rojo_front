import footer from '../../../public/img/footer.png'
import fb from '../../../public/img/Facebook.png'
import Tw from '../../../public/img/Twitter.png'
import Vime from '../../../public/img/Vimeo.png'
import yout from '../../../public/img/Youtube.png'
import uni from '../../../public/img/Union.png'


export default function Footer() {
  return (
    <footer className='hidden md:block w-screen  mb-10'>
        <div className='mb-14'>
          <img className='w-screen h-[12rem]'  src={footer}/> 
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
                        <img src={fb}  />
                        <img src={Tw} />
                        <img src={Vime}/>
                        <img src={yout} />
                    </div>
                    <div className='flex justify-center'>
                        <button className='text-white mt-2 bg-gradient-to-b from-[#FF5722] flex  to-[#F97316] py-1 px-[3rem] rounded'>Donate <img className='w-3 relative top-2 left-2' src={uni} /> </button>
                    </div>
                </div>
            </div>
        </div>
    </footer> 
  )
}
