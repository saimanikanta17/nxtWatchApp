import Popup from 'reactjs-popup'

import NxtContext from '../../context/NxtContext'

import {
  ThemeButton,
  LogOutCard,
  ConfirmButton,
  CancelButton,
} from './styledComponents'

const LogoutPopUp = props => {
  const {onClickLogout} = props
  return (
    <NxtContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        return (
          <div>
            <Popup
              modal
              trigger={
                <ThemeButton type="button" isDarkTheme={isDarkTheme}>
                  Logout
                </ThemeButton>
              }
              className="popup-content"
            >
              {close => (
                <LogOutCard isDarkTheme={isDarkTheme}>
                  <p>Are you sure, you want to logout?</p>
                  <CancelButton type="button" onClick={() => close()}>
                    Cancel
                  </CancelButton>
                  <ConfirmButton type="button" onClick={onClickLogout}>
                    Confirm
                  </ConfirmButton>
                </LogOutCard>
              )}
            </Popup>
          </div>
        )
      }}
    </NxtContext.Consumer>
  )
}

export default LogoutPopUp
