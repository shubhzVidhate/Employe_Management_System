import React from 'react'

const EmpDashTaskListNum = () => {
  return (
    <div className='flex justify-between gap-5 mt-10 screen'>
        <div className="rounded-xl bg-blue-400 h-30 w-[45%] py-6 px-9">
            <h2 className='text-3xl font-semibold'>0</h2>
            <h3 className='text-2xl font-medium'>New Task</h3>
        </div>
        <div className="rounded-xl bg-green-400 h-30 w-[45%] py-6 px-9">
            <h2 className='text-3xl font-semibold'>0</h2>
            <h3 className='text-2xl font-medium'>Completed</h3>
        </div>
        <div className="rounded-xl bg-yellow-400 h-30 w-[45%] py-6 px-9">
            <h2 className='text-3xl font-semibold'>0</h2>
            <h3 className='text-2xl font-medium'>Accept</h3>
        </div>
        <div className="rounded-xl bg-red-400 h-30 w-[45%] py-6 px-9">
            <h2 className='text-3xl font-semibold'>0</h2>
            <h3 className='text-2xl font-medium'>Failed</h3>
        </div>
        
    </div>
  )
}

export default EmpDashTaskListNum