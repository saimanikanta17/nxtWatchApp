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
        </SideBarContainer>
      )
    }}
  </NxtContext.Consumer>
)

export default SideBar
