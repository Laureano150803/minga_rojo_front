import mona from '../../../public/img/monita.svg'
import one from '../../../public/img/one.png'


export default function Carousel({category}) {
    console.log(category)
  return (
    <div className='flex justify-center'>
        <div className='bg-gradient-to-b from-[#FF5722]  to-[#F97316] h-[10rem] rounded-sm w-[90%]  flex justify-between' >
            <div className='flex items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 bg-slate-100 rounded-full">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75" />
                </svg>
            </div>
            <img className='relative bottom-5' src={mona}/> 
            <img className='relative bottom-5' src={one}/>
            <div className='text-white text-xs flex flex-col justify-center flex-wrap'>
                <h5 className='text-base font-bold'>{category}</h5>
                <p className='w-[18rem]'>Shonen Is the manga that is aimed at adolescent boys. They are series with large amounts of action, in which humorous situations often occur. The camaraderie between members of a collective or a combat team stands out.</p>
            </div>
            <div className='flex items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 bg-slate-100 rounded-full">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                </svg>
            </div>
        </div>
    </div>
  )
}
