import {withRouter} from 'react-router-dom'

import Cookie from 'js-cookie'

import {BsMoon, BsBrightnessHigh} from 'react-icons/bs'

import LogoutPopUp from '../LogoutPopUp'

import NxtContext from '../../context/NxtContext'

import {
  NavBar,
  ButtonsContainer,
  ThemeButton,
  ProfileLogo,
  LogoImage,
} from './styledComponents'

const Header = props => {
  const onClickLogout = () => {
    Cookie.remove('jwt_token')
    const {history} = props
    history.replace('/login')
  }

  return (
    <NxtContext.Consumer>
      {value => {
        const {isDarkTheme, changeTheme} = value
        const logo = isDarkTheme
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
        return (
          <NavBar isDarkTheme={isDarkTheme}>
            <LogoImage className="website-logo" src={logo} alt="website logo" />
            <ButtonsContainer isDarkTheme={isDarkTheme}>
              {isDarkTheme ? (
                <ThemeButton type="button" onClick={changeTheme}>
                  <BsBrightnessHigh color="#f9f9f9" size="30px" />
                </ThemeButton>
              ) : (
                <ThemeButton type="button" onClick={changeTheme}>
                  <BsMoon size="30px" />
                </ThemeButton>
              )}
              <ProfileLogo
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                alt="profile"
              />
              <LogoutPopUp onClickLogout={onClickLogout} />
            </ButtonsContainer>
          </NavBar>
        )
      }}
    </NxtContext.Consumer>
  )
}
export default withRouter(Header)
