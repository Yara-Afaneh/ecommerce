import React from 'react'
import Navbar from './../components/dashboared/navbar/Navbar.jsx'
import Footer from './../components/dashboared/footer/Footer.jsx'
import { Outlet } from 'react-router-dom'

export default function DashboaredLayout() {
  return (
    <>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </>
  )
}
