import styled from 'styled-components'

export const SavedVideosContainer = styled.div`
  background-color: ${props => (props.isDarkTheme ? '#0f0f0f' : '#f9f9f9')};
  color: ${props => (props.isDarkTheme ? '#f9f9f9' : '#0f0f0f')};
`
export const NoVideosImg = styled.img`
  width: 600px;
  height: 400px;
`
export const NoVideosFoundContainer = styled.div`
  text-align: center;
`
