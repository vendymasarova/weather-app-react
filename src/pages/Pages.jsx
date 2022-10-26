import { Route, Routes, useLocation } from 'react-router-dom'

import React from 'react'
// import Home from './Home/Home'
import Searched from './Searched/Searched'

const Pages = () => {
  const location = useLocation()

  return (
    <Routes location={location} key={location.pathname}>
      {/* <Route path="/" element={<Home />} />  */}
      <Route path="/searched/:search" element={<Searched />} /> 
    </Routes>
  )
}

export default Pages
