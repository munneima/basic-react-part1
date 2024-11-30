import React from 'react'
import Navbar from '../Components/Shared/Navbar'
import Footer from '../Components/Shared/Footer'
import { Outlet } from 'react-router-dom'

function MainLayout() {
  return (
    <div>
        <Navbar/>
        <Outlet/>
        <Footer/>

    </div>
  )
}

export default MainLayout