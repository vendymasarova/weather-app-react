import styled from "styled-components"

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

export const StyledBody = styled.div`
  display: flex;
  justify-content: space-around;
`

export const StyledButtonWrapper = styled.div`
  position: absolute;
  top: 40px;
  left: 40px;
`

export const StyledGrid = styled.div`
  display: grid;
  grid-gap: 40px;
  margin-top: 120px;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
`

