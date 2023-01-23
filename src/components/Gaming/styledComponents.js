import styled from 'styled-components'

export const GamingContainer = styled.div`
  background-color: ${props => (props.isDarkTheme ? '#0f0f0f' : '#f9f9f9')};
  color: ${props => (props.isDarkTheme ? '#f9f9f9' : '#0f0f0f')};
`
export const GamingUnorderedList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  padding: 0px;
  margin: 0px;
`
