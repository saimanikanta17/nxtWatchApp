import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'

import {TrendingContainer, TrendingUnorderedList} from './styledComponents'
import NxtContext from '../../context/NxtContext'
import SideBar from '../SideBar'
import Header from '../Header'
import TrendingCard from '../TrendingCard'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Trending extends Component {
  state = {
    trendingVideosList: [],
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getTrendingVideoDetails()
  }

  getTrendingVideoDetails = async () => {
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = 'https://apis.ccbp.in/videos/trending'
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    if (response.ok) {
      const fetchedData = await response.json()
      const trendingData = fetchedData.videos.map(video => ({
        name: video.channel.name,
        profileImageUrl: video.channel.profile_image_url,
        publishedAt: video.published_at,
        id: video.id,
        thumbnailUrl: video.thumbnail_url,
        title: video.title,
        viewCount: video.view_count,
      }))
      this.setState({
        trendingVideosList: trendingData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }
  }

  renderTrendingLoaderView = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </div>
  )

  renderTrendingFailureView = isDarkTheme => {
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
        <button type="button" onClick={this.getTrendingVideoDetails}>
          Retry
        </button>
      </div>
    )
  }

  renderTrendingView = isDarkTheme => {
    const {trendingVideosList} = this.state
    return (
      <TrendingContainer isDarkTheme={isDarkTheme}>
        <h1>Trending</h1>
        <TrendingUnorderedList>
          {trendingVideosList.map(trending => (
            <TrendingCard trending={trending} key={trending.id} />
          ))}
        </TrendingUnorderedList>
      </TrendingContainer>
    )
  }

  renderTrendingVideos = isDarkTheme => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderTrendingView(isDarkTheme)
      case apiStatusConstants.failure:
        return this.renderTrendingFailureView(isDarkTheme)
      case apiStatusConstants.inProgress:
        return this.renderTrendingLoaderView(isDarkTheme)
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
            <TrendingContainer data-testid="trending">
              <Header />
              <div className="bg-container">
                <SideBar />
                {this.renderTrendingVideos(isDarkTheme)}
              </div>
            </TrendingContainer>
          )
        }}
      </NxtContext.Consumer>
    )
  }
}

export default Trending
