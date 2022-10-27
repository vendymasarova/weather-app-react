import React from 'react'
import { Wheel, Circle } from './Loader-styles'

const Loader = () => {
  return (
    <Wheel>
      <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#2194f2" />
        <stop offset="100%" stopColor="#93e0e5" />
      </linearGradient>
      <Circle cx="50%" cy="50%" r="30" stroke="url(#gradient)" />
    </Wheel>
  )
}
export default Loader