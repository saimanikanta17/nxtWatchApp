import styled from 'styled-components'

export const ThumbnailImg = styled.img`
  width: 350px;
  height: 180px;
  margin: 20px;
`
export const ListItem = styled.li`
  display: flex;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#212121')};
`
