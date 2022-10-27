import styled, { keyframes } from "styled-components"

export const scale = keyframes`
  0% {
    /* stroke-dashoffset: 471; */
    transform: scale(0.7);
  }
  100% {
    /* stroke-dashoffset: 0; */
    transform: scale(1);
  } 
`

 

export const Container = styled.div`
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const StyledArrow = styled.div`
  width: 50px;
  height: 50px;
  position: absolute;
  top: 50px;
  left: 50px;
  border-radius: 50%;
  background: linear-gradient(
    to right bottom,
    rgba(255, 255, 255, 0.7),
    rgba(255, 255, 255, 0.3)
  );
  backdrop-filter: blur(2rem);
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    font-size: 25px;
  }

  &::after {
    content: "";
    position: absolute;
    width: 60px;
    height: 60px;
     background: linear-gradient(
    to right bottom,
    rgba(255, 255, 255, 0.7),
    rgba(255, 255, 255, 0.7)
  );
    animation: ${scale} 1s linear infinite alternate;
    z-index: -1;
    border-radius: 50%;
  }
`

