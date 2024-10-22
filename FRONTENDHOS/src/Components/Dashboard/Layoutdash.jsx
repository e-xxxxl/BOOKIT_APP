import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import Navbardash from './Navbardash'

const Layoutdash = () => {
  const [isLoading, setIsLoading] = useState()

  useEffect(() => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 3000);

  }, []);

  return (
    <>
    {isLoading? (

<div class="loader">
<span class="loader-text">BOOKIT</span>
  <span class="load"></span>
</div>

    ):(
    <>
    <Navbardash/>
    <Outlet/>
    </>
    )}
    </>
  )
}

export default Layoutdash