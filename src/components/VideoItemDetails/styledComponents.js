import styled from 'styled-components'

export const VideoContainer = styled.div`
  background-color: ${props => (props.isDarkTheme ? '#212121' : '#ffffff')};
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#212121')};
`
