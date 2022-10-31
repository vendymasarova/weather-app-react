import styled from "styled-components"

export const Wrapper = styled.div`
  position: relative;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
`

export const Container = styled.div`
  width: 100%;
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
`

export const Figure = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

export const Body = styled.div`
  /* position: relative; */
`