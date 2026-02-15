import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='mt-14 mx-auto max-w-6xl grid grid-cols-[40%_60%]'>
      <div>
        <div className='sticky top-14 grid grid-rows-[35%_40%_25%] h-screen'>
          <div className='flex flex-col gap-2'>
            <div className='text-3xl text-primaryTitle'>Suriya Pinitkan</div>
            <div className='text-primaryAccent font-semibold'>Software Developer · between jobs</div>
            <div className='text-sm w-5/6'>From concept to reality, bridging the gap with code, transforming ideas into tangible digital solutions.</div>
            <div className='mt-4'>
              <span className='rounded-md bg-primaryTitle text-white py-2 px-4'>View Resume</span>
            </div>
          </div>
          <div>Nav</div>
          <div className='flex items-end'>Link</div>
        </div>
      </div>
      <div>
        <div >About</div>
        <div className='mb-80'>Experience</div>
        <div className='mb-80'>Experience</div>
        <div className='mb-80'>Experience</div>
        <div className='mb-80'>Experience</div>
        <div className='mb-80'>Experience</div>
        <div className='mb-80'>Experience</div>
      </div>
    </div>
  )
}

export default App
