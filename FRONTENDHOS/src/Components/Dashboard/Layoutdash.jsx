import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbardash from './Navbardash'

const Layoutdash = () => {
  return (
    <>
    <Navbardash/>
    <Outlet/>
    </>
  )
}

export default Layoutdash