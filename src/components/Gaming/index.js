import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'

import {GamingContainer, GamingUnorderedList} from './styledComponents'
import NxtContext from '../../context/NxtContext'
import SideBar from '../SideBar'
import Header from '../Header'
import GameCard from '../GameCard'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Gaming extends Component {
  state = {
    GamesList: [],
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getGamesDetails()
  }

  getGamesDetails = async () => {
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = 'https://apis.ccbp.in/videos/gaming'
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    if (response.ok) {
      const fetchedData = await response.json()
      const gameData = fetchedData.videos.map(video => ({
        id: video.id,
        thumbnailUrl: video.thumbnail_url,
        title: video.title,
        viewCount: video.view_count,
      }))
      this.setState({
        GamesList: gameData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }
  }

  renderGamingLoaderView = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </div>
  )

  renderGamingFailureView = isDarkTheme => {
    const failureImg = isDarkTheme
      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
    return (
      <div>
        <img src={failureImg} alt="failure view" />
        <h1>Oops! Something Went Wrong</h1>
        <p>
          We are having some trouble processing your request. Please try again.
        </p>
        <button type="button" onClick={this.getGamesDetails}>
          Retry
        </button>
      </div>
    )
  }

  renderGamingView = isDarkTheme => {
    const {GamesList} = this.state
    return (
      <GamingContainer isDarkTheme={isDarkTheme}>
        <h1>Gaming</h1>
        <GamingUnorderedList>
          {GamesList.map(game => (
            <GameCard game={game} key={game.id} />
          ))}
        </GamingUnorderedList>
      </GamingContainer>
    )
  }

  renderGamingVideos = isDarkTheme => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderGamingView(isDarkTheme)
      case apiStatusConstants.failure:
        return this.renderGamingFailureView(isDarkTheme)
      case apiStatusConstants.inProgress:
        return this.renderGamingLoaderView(isDarkTheme)
      default:
        return null
    }
  }

  render() {
    return (
      <NxtContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          return (
            <GamingContainer data-testid="gaming">
              <Header />
              <div className="bg-container">
                <SideBar />
                {this.renderGamingVideos(isDarkTheme)}
              </div>
            </GamingContainer>
          )
        }}
      </NxtContext.Consumer>
    )
  }
}

export default Gaming
