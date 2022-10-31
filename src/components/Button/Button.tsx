import React, {ReactNode} from 'react'
import {
  StyledArrow,
} from "./Button-styles"

interface Props {
	children: ReactNode;
	onClick: () => void;
}

export const Button = ({ children, onClick }: Props) => {
  return (
    <StyledArrow onClick={onClick}>
      {children}
    </StyledArrow>
  )
}