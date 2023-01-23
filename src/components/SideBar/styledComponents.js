import styled from 'styled-components'

export const SideBarContainer = styled.div`
  background-color: ${props => (props.isDarkTheme ? '#212121' : '#ffffff')};
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#212121')};
`
