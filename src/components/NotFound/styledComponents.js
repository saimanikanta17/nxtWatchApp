import styled from 'styled-components'

export const NotFoundImg = styled.img`
  width: 300px;
  height: 300px;
`
export const NotFoundContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${props => (props.isDarkTheme ? '#f9f9f9' : '#0f0f0f')};
`
