import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Grids from './Grids'
import Responsive from './Responsive'
function App() {
  

  return (
    <>
      <div className='flex justify-between'>
        <div className='bg-red-500'>red</div>
        <div className='bg-yellow-500'>yellow</div>
        <div className='bg-green-500'>green</div>
        <div className='bg-blue-500'>blue</div>
      </div>
      <br />
      <Grids />
      <Responsive />
    </>
  )
}

export default App
