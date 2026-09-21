import React from 'react'
import EmpDashHeader from '../Others/EmpDashHeader';
import EmpDashTaskListNum from '../Others/EmpDashTaskListNum';
import EmpDashTaskList from '../TaskList/EmpDashTaskList';

const EmployeeDashboard = () => {
  return (
    <div className='p-10 bg-[#1c1c1c] h-screen'>
        <EmpDashHeader />
        <EmpDashTaskListNum />
        <EmpDashTaskList />
    </div>
  )
}

export default EmployeeDashboard;