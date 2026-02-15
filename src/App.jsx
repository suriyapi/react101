import { useState } from 'react'
import './App.css'

import Header from './section/Header'
import Navbar from './section/Navbar'
import Contact from './section/Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='mt-14 mx-auto max-w-6xl grid grid-cols-[40%_60%]'>
      <div>
        <div className='sticky top-14 grid grid-rows-[35%_40%_25%] h-[90vh]'>
          <Header />
          <Navbar />
          <Contact />
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
