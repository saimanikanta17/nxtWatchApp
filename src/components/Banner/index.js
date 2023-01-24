import {Component} from 'react'
import {RiCloseLine} from 'react-icons/ri'

import {LogoImage, BannerContainer, CloseButton} from './styledComponents'

class Banner extends Component {
  state = {isClosed: false}

  onclickClose = () => {
    this.setState({isClosed: true})
  }

  render() {
    const {isClosed} = this.state
    return (
      <>
        {!isClosed && (
          <BannerContainer data-testid="banner">
            <div>
              <LogoImage
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                alt="nxt watch logo"
              />
              <p>Buy Nxt Watch Premium prepaid plans with UPI</p>
              <button type="button">GET IT NOW</button>
            </div>
            <CloseButton
              type="button"
              onClick={this.onclickClose}
              data-testid="close"
            >
              <RiCloseLine />
            </CloseButton>
          </BannerContainer>
        )}
      </>
    )
  }
}

export default Banner
