import React, {ReactNode} from 'react'
import { 
  CardWrap 
} from './Card-styles'

interface Props {
	children: ReactNode;
	onClick?: () => void;
}

const Card = ({ children, onClick }:Props) => {
  return (
    <CardWrap onClick={onClick}>
      {children}
    </CardWrap>
  )
}

export default Card