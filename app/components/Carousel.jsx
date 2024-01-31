import { useState } from 'react';
import { IoChevronBack, IoChevronForward } from "react-icons/io5";


export default function Carousel({ children: slides}) {
  const [curr, setCurr] = useState(0)
  const prev = () => setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1 ))
  const next = () => setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1 ))

  return (
    <div className="overflow-hidden relative">
      <div className="flex transition-transform ease-out duration-500 max-h-[720px]"
      style={{ transform: `translateX(-${curr * 100}%)` }}>
          {slides}
        {/* {slides.map((slide, i) => (
          <div key={i}>
            {slide}
          </div>
        ))} */}
      </div>
      
      <div className='absolute inset-0 flex items-center justify-between p-4'>
        <button onClick={prev} className='p-1 rounded-full shadow bg-white bg-opacity-70 text-gray-800 hover:bg-white'>
          <IoChevronBack size={20} />
        </button>
        <button onClick={next} className='p-1 rounded-full shadow bg-white bg-opacity-70 text-gray-800 hover:bg-white'>
          <IoChevronForward size={20} />
        </button>
      </div>
    </div>
  )
}