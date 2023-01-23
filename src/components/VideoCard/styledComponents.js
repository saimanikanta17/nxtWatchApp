import styled from 'styled-components'

export const ThumbnailImg = styled.img`
  width: 300px;
  height: 170px;
`
export const ProfileImg = styled.img`
  width: 50px;
  height: 50px;
`
export const VideoListItem = styled.li`
  width: 300px;
  min-height: 300px;
  list-style-type: none;
  margin: 20px;
  font-family: 'Roboto';
  color: ${props => (props.isDarkTheme ? '#f9f9f9' : '#0f0f0f')};
`
