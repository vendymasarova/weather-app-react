import styled from "styled-components"

export const Form = styled.form`
  width: 100%;
  position: relative;

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

  datalist, option {
    width: 100%
  }
`

export const StyledOptions = styled.div`
  position: absolute;
  width: 100%;
  max-width: 900px;
  padding: 10;
  background: linear-gradient(
      to right bottom,
      rgba(193, 221, 235, 0.7),
      rgba(193, 221, 235, 0.3)
    );
  font-size: 1rem;
  border-radius: 2rem;
  padding: 20px 0;

  p {
    margin: 0 20px;
    padding: 10px 0;
    border-bottom: 1px solid rgb(255, 255, 255, 0.5);
  }
`