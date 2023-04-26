import axios from 'axios'
import apiUrl from '../../../api'
import { useState, useEffect } from 'react'


export default function Carousel({category}) {
    useEffect(
        ()=>{axios(apiUrl+'categories').then(res=>setCategories(res.data.categories)).catch(err=>console.log(err))},
        []
    )
    let [categories, setCategories] = useState([])  

    let[counter, setCounter] = useState(0)
    let suma = ()=>{
        setCounter(counter+1)
        if(counter===categories.length -1){
            setCounter(0)
        }
    }
    let resta= ()=>{
        setCounter(counter-1)
        if(counter===0){
            setCounter(categories.length)
        }
    }
  return (
    <div className='flex justify-center'>
        <div className='h-[10rem] rounded-sm w-[90%]  flex justify-between' style={{backgroundColor:categories[counter]?.color }} >
            <div className='flex items-center'>
                <svg onClick={resta} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 bg-slate-100 rounded-full md:relative left-5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75" />
                </svg>
            </div>
            <img className='relative bottom-5' src={categories[counter]?.cover_photo}/> 
            <img className='relative bottom-5' src={categories[counter]?.character_photo}/>
            <div className='text-white text-xs flex flex-col justify-center flex-wrap'>
                <h5 className='text-base font-bold'>{categories[counter]?.name}</h5>
                <p className='w-[18rem]'>{categories[counter]?.description}</p>
            </div>
            <div className='flex items-center'>
                <svg onClick={suma}  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 bg-slate-100 rounded-full md:relative right-5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                </svg>
            </div>
        </div>
    </div>
  )
}
