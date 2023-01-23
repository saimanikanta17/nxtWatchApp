import styled from 'styled-components'

export const GameThumbnailImg = styled.img`
  width: 200px;
  height: 300px;
  margin: 20px;
`
export const GamingListItem = styled.li`
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#212121')};
`
