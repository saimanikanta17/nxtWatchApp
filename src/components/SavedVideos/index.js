import {Component} from 'react'

import {
  SavedVideosContainer,
  NoVideosImg,
  NoVideosFoundContainer,
} from './styledComponents'
import NxtContext from '../../context/NxtContext'
import SideBar from '../SideBar'
import Header from '../Header'
import SavedVideoCard from '../SavedVideoCard'

class SavedVideos extends Component {
  render() {
    return (
      <NxtContext.Consumer>
        {value => {
          const {isDarkTheme, savedVideosList} = value
          const noVideos = savedVideosList.length === 0
          return (
            <div>
              <Header />
              <div className="bg-container">
                <SideBar />
                <SavedVideosContainer
                  isDarkTheme={isDarkTheme}
                  data-testid="savedVideos"
                >
                  {noVideos ? (
                    <NoVideosFoundContainer>
                      <NoVideosImg
                        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
                        alt="no saved videos"
                      />
                      <h1>No saved videos found</h1>
                      <p>You Can save your videos while watching them</p>
                    </NoVideosFoundContainer>
                  ) : (
                    <div>
                      <h1>Saved Videos</h1>
                      <ul>
                        {savedVideosList.map(video => (
                          <SavedVideoCard video={video} key={video.id} />
                        ))}
                      </ul>
                    </div>
                  )}
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
