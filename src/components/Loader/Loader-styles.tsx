import styled, { keyframes } from 'styled-components'

export const loadingAnimation = keyframes`
  0% {
    /* stroke-dashoffset: 471; */
    transform: rotate(0deg)
  }
  100% {
    /* stroke-dashoffset: 0; */
    transform: rotate(360deg)
  } 
`

export const Wheel = styled.svg`
  min-height: 30px;
  width: 100%;
`
export const Circle = styled.circle`
  fill: transparent;
  stroke-width: 5px;
  stroke-dasharray: 200;
  stroke-dashoffset: calc(200 / 4);
  animation: ${loadingAnimation} 3s linear infinite;
  transform-origin: 50% 50%;
`