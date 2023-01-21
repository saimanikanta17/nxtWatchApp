import {withRouter} from 'react-router-dom'

import Cookie from 'js-cookie'

import {BsMoon, BsBrightnessHigh} from 'react-icons/bs'

import LogoutPopUp from '../LogoutPopUp'

const Header = props => {
  const onClickLogout = () => {
    Cookie.remove('jwt_token')
    const {history} = props
    history.replace('/login')
  }
  return (
    <nav>
      <img
        className="website-logo"
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
        alt="website logo"
      />
      <div>
        <LogoutPopUp onClickLogout={onClickLogout} />
      </div>
      <BsMoon />
      <BsBrightnessHigh />
    </nav>
  )
}
export default withRouter(Header)
