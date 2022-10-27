import { Route, Routes, useLocation } from 'react-router-dom'

import React from 'react'
import Home from './Home/Home'
import Searched from './Searched/Searched'
import LocationWeather from './LocationWeather/LocationWeather'

const Pages = () => {
  const location = useLocation()

  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<Home />} /> 
      <Route path="/:search" element={<Searched />} /> 
      <Route path="/location/:search" element={<LocationWeather />} /> 
    </Routes>
  )
}

export default Pages
