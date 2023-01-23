import {Component} from 'react'

import {SavedVideosContainer} from './styledComponents'
import NxtContext from '../../context/NxtContext'
import SideBar from '../SideBar'
import Header from '../Header'

class SavedVideos extends Component {
  render() {
    return (
      <NxtContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          return (
            <div>
              <Header />
              <div className="bg-container">
                <SideBar />
                <SavedVideosContainer isDarkTheme={isDarkTheme}>
                  <h1>Saved Videos</h1>
                </SavedVideosContainer>
              </div>
            </div>
          )
        }}
      </NxtContext.Consumer>
    )
  }
}

export default SavedVideos
