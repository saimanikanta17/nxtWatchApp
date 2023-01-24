import {Link} from 'react-router-dom'
import {HiFire} from 'react-icons/hi'
import {AiFillHome} from 'react-icons/ai'
import {SiYoutubegaming} from 'react-icons/si'
import {CgPlayListAdd} from 'react-icons/cg'
import './index.css'

import {SideBarContainer} from './styledComponents'
import NxtContext from '../../context/NxtContext'

const SideBar = () => (
  <NxtContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      return (
        <SideBarContainer isDarkTheme={isDarkTheme}>
          <div>
            <Link to="/" className="sidebar">
              <div className="link-side-bar">
                <AiFillHome />
                <p>Home</p>
              </div>
            </Link>
            <Link to="/trending" className="sidebar">
              <div className="link-side-bar">
                <HiFire />
                <p>Trending</p>
              </div>
            </Link>
            <Link to="/gaming" className="sidebar">
              <div className="link-side-bar">
                <SiYoutubegaming />
                <p>Gaming</p>
              </div>
            </Link>
            <Link to="/saved-videos" className="sidebar">
              <div className="link-side-bar">
                <CgPlayListAdd />
                <p>Saved Videos</p>
              </div>
            </Link>
          </div>
          <div>
            <p>CONTACT US</p>
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                alt="facebook logo"
              />
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                alt="twitter logo"
              />
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                alt="linked in logo"
              />
            </div>
            <p>Enjoy! Now to see your channels and recommendations!</p>
          </div>
        </SideBarContainer>
      )
    }}
  </NxtContext.Consumer>
)

export default SideBar
