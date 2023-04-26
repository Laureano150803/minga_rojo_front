import { useState } from "react";


export default function Menu({close}) {
     
  return (
    <div className='h-screen  md:h-[22rem] md:w-[20rem] md:rounded-[10px] md:opacity-90 absolute  right-0 left-0 bottom-0 top-0 bg-gradient-to-r from-[#F97316] to-[#FF5722] flex flex-col items-center text-white'>
      <div className="flex items-center justify-evenly w-[100vw] md:w-[22rem]">
        <div className="flex items-center">
          <img className="w-10 h-10 rounded-full" src="https://s3-alpha-sig.figma.com/img/d771/e8ee/4d516f000e29670bda6ceb5a6c836183?Expires=1683504000&Signature=jF6~HkHiXPkqSYL7bHO4bVz2kxs7E2DbCgp4laMFphKugDHT7Cx2HF38d6PdcKolxaO3E12KBIo8ftFP1gLGOAkn84KwZU16sGeKFCBGE8To-oyUUPkAo7ZG1MOBxGK-YWna8EUi718hOHd7mTvkJp0YxSwM3KhgS5qWn3Gfx6v2n3dUue16xqkTXnFk~Qxj-k91gR2uTCNTKHB7YmDFyt9sqSQVTO7RQCvC2xZDCBifEitN71E-qXX8jLO6q0gtLOhRkWW0c5AwOKSr~3kT9jhNZzfUR~s~06cFo4~ezMJokagPoB8W-WJMQq4X9yCCfXzv-s8sOJu5cIBL~JeiQA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="image" />
          <div className=" ml-2">
            <p className="text-sm font-bold">Lucas Ezequiel Silva</p>
            <p className="text-xs">lucasezequielsilva@gmail.com</p>
          </div>
        </div>
        <svg onClick={close} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 cursor-pointer ">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </div>
        <a className="my-[15px] font-bold text-[#F97316] bg-slate-100 py-3 px-32 rounded-[10px]" href="#">Home</a>
        <a className="my-[15px] font-bold" href="#">Comics</a>
        <a className="my-[15px] font-bold" href="#">My Comics</a>
        <a className="my-[15px] font-bold" href="#">Favorites</a>
        <a className="my-[15px] font-bold" href="#">Logout</a>
    </div>
  )
}
