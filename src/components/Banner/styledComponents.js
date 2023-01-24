import styled from 'styled-components'

export const GameThumbnailImg = styled.img`
  width: 200px;
  height: 300px;
  margin: 20px;
`
export const GamingListItem = styled.li`
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#212121')};
`
export const LogoImage = styled.img`
  height: 30px;
  width: 130px;
  align-self: center;

  @media screen and (min-width: 768px) {
    height: 45px;
    width: 180px;
  }
`
export const BannerContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  display: flex;
`
export const CloseButton = styled.button`
  background-color: transparent;
  border-style: none;
`
