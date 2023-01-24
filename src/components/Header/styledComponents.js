import styled from 'styled-components'

export const NavBar = styled.nav`
  height: 80px;
  width: 100vw;
  font-family: 'Roboto';
  display: flex;
  justify-content: space-between;
  padding: 20px;
  background-color: ${props => (props.isDarkTheme ? '#212121' : '#ffffff')};
`

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 50px;
`
export const ThemeButton = styled.button`
  background-color: transparent;
  border-style: none;
`
export const ProfileLogo = styled.img`
  height: 40px;
  width: 40px;
  margin: 20px;
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
