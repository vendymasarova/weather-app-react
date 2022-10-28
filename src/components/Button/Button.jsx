import React from 'react'
import {
  StyledArrow,
} from "./Button-styles"

const Button = ({ children, onClick }) => {
  return (
    <StyledArrow onClick={onClick}>
      {children}
    </StyledArrow>
  )
}

export default Button