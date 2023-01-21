import Popup from 'reactjs-popup'

const LogoutPopUp = props => {
  const {onClickLogout} = props
  return (
    <div>
      <Popup
        modal
        trigger={
          <button className="trigger-button" type="button">
            Trigger
          </button>
        }
        className="popup-content"
      >
        {close => (
          <>
            <div>
              <p>Are you sure, you want to logout?</p>
            </div>
            <button type="button" onClick={() => close()}>
              Cancel
            </button>
            <button type="button" onClick={onClickLogout}>
              Confirm
            </button>
          </>
        )}
      </Popup>
    </div>
  )
}

export default LogoutPopUp
