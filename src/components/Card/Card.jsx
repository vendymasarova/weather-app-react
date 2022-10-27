import React from 'react'
import { 
  CardWrap 
} from './Card-styles'

const Card = ({ children, onClick }) => {
  return (
    <CardWrap onClick={onClick}>
      {children}
    </CardWrap>
  )
}

export default Card