import React from 'react'
import { Outlet } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div>
        Dashboard Page
        <Outlet/>  {/* When we add children Routes in any component, to make them working we need to use the <Outlet/> inside the parent Component */}
    </div>
  )
}

export default Dashboard
