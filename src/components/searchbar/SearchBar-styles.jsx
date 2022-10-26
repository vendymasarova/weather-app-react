import styled from "styled-components"

export const Form = styled.form`
  width: 100%;

  input {
     background: linear-gradient(
      to right bottom,
      rgba(255, 255, 255, 0.7),
      rgba(255, 255, 255, 0.3)
    );
    border-radius: 2rem;
    z-index: 3;
    backdrop-filter: blur(2rem);
    border: none;
    outline: none;
    width: 100%;
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
    padding-left: 3.5rem;
    font-size: 20px;
    z-index: 9;
  }
`

export const InputWrapper = styled.div`
  position: relative;
  display: flex;

    svg {
    position: absolute;
    top: 50%;
    left: 20px;
    transform: translate(0, -50%);
    color: white;
    font-size: 30px;
    z-index: 9;
  }
`