import {Component} from 'react'

import Cookies from 'js-cookie'

import {BsSearch} from 'react-icons/bs'

import Loader from 'react-loader-spinner'

import Header from '../Header'

import VideoCard from '../VideoCard'

import {
  VideosUnorderedList,
  NoVideosImg,
  HomeContainer,
} from './styledComponents'

import SideBar from '../SideBar'

import Banner from '../Banner'

import NxtContext from '../../context/NxtContext'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Home extends Component {
  state = {
    VideosList: [],
    apiStatus: apiStatusConstants.initial,
    searchInput: '',
  }

  componentDidMount() {
    this.getVideosDetails('')
  }

  clickRetry = () => {
    this.getVideosDetails('')
  }

  getVideosDetails = async searchText => {
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/videos/all?search=${searchText}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    if (response.ok) {
      const fetchedData = await response.json()
      const videoData = fetchedData.videos.map(video => ({
        name: video.channel.name,
        profileImageUrl: video.channel.profile_image_url,
        publishedAt: video.published_at,
        id: video.id,
        thumbnailUrl: video.thumbnail_url,
        title: video.title,
        viewCount: video.view_count,
      }))
      this.setState({
        VideosList: videoData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }
  }

  changeText = event => {
    this.setState({searchInput: event.target.value})
  }

  startSearch = () => {
    const {searchInput} = this.state
    this.getVideosDetails(searchInput)
  }

  renderHomeLoaderView = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </div>
  )

  renderHomeFailureView = isDarkTheme => {
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
        <button type="button" onClick={this.clickRetry}>
          Retry
        </button>
      </div>
    )
  }

  noVideosView = () => (
    <div>
      <NoVideosImg
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
        alt="no videos"
      />
      <h1>No Search results found</h1>
      <p>Try different key words or remove search filter</p>
      <button type="button" onClick={this.clickRetry}>
        Retry
      </button>
    </div>
  )

  renderHomeView = isDarkTheme => {
    const {VideosList} = this.state
    return VideosList.length === 0 ? (
      this.noVideosView()
    ) : (
      <VideosUnorderedList isDarkTheme={isDarkTheme}>
        {VideosList.map(video => (
          <VideoCard video={video} key={video.id} />
        ))}
      </VideosUnorderedList>
    )
  }

  renderHomeVideos = isDarkTheme => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderHomeView(isDarkTheme)
      case apiStatusConstants.failure:
        return this.renderHomeFailureView(isDarkTheme)
      case apiStatusConstants.inProgress:
        return this.renderHomeLoaderView(isDarkTheme)
      default:
        return null
    }
  }

  render() {
    const {searchInput} = this.state
    return (
      <NxtContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          return (
            <HomeContainer data-testid="home">
              <Header />
              <div className="bg-container">
                <SideBar />
                <div>
                  <Banner />
                  <div>
                    <input
                      type="search"
                      value={searchInput}
                      onChange={this.changeText}
                    />
                    <button
                      type="button"
                      onClick={this.startSearch}
                      data-testid="searchButton"
                    >
                      <BsSearch />
                    </button>
                  </div>
                  {this.renderHomeVideos(isDarkTheme)}
                </div>
              </div>
            </HomeContainer>
          )
        }}
      </NxtContext.Consumer>
    )
  }
}

export default Home
