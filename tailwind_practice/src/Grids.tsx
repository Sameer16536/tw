import React from 'react'

const Grids = () => {
  return (
    <div className='grid grid-cols-4'>
        <div className='bg-red-300 col-span-1'>1</div>
        <div className='bg-yellow-300 col-span-1'>2</div> 
        <div className='bg-green-300 col-span-1'>3</div>
        <div className='bg-blue-300 col-span-1'>4</div>
    </div>
  )
}

export default Grids