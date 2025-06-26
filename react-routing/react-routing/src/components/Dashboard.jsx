import React from 'react'
import { Outlet } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div>
        Dashboard Page
        <Outlet/>  {/* When we add child Routes in any components to make them working we need to use the <Outlet/> inside the parent Component */}
    </div>
  )
}

export default Dashboard
