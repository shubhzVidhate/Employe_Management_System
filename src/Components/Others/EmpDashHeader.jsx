import React from 'react'

const EmpDashHeader = () => {
  return (
    <div className='flex item-end justify-between'>
        <h1 className='text-2xl font-medium'>Hello <br /> <span className='font-semibold text-3xl'>Shubham👋</span></h1>
        <button className='bg-red-700 px-5 py-2 rounded-sm text-lg font-medium'>Log Out</button>
    </div>
  )
}

export default EmpDashHeader