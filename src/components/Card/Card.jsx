import React from 'react'
import { 
  CardWrap 
} from './Card-styles'

const Card = ({children}) => {
  return (
    <CardWrap>
      {children}
    </CardWrap>
  )
}

export default Card