import styled from 'styled-components'

export const TrendingThumbnailImg = styled.img`
  width: 350px;
  height: 180px;
  margin: 20px;
`
export const TrendingListItem = styled.li`
  display: flex;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#212121')};
`
