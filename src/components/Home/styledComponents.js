import styled from 'styled-components'

export const VideosUnorderedList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 0px;
  margin: 0px;
  background-color: ${props => (props.isDarkTheme ? '#181818' : '#f9f9f9')};
`
export const NoVideosImg = styled.img`
  height: 250px;
  width: 250px;
`

export const HomeContainer = styled.div`
  background-color: ${props => (props.isDarkTheme ? '#181818' : '#f9f9f9')};
`
