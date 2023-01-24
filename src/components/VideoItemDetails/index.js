import {Component} from 'react'

import Cookies from 'js-cookie'

import Loader from 'react-loader-spinner'

import ReactPlayer from 'react-player'

import {BiLike, BiDislike} from 'react-icons/bi'

import {BsDot} from 'react-icons/bs'

import {CgPlayListAdd} from 'react-icons/cg'

import SideBar from '../SideBar'

import NxtContext from '../../context/NxtContext'

import {
  VideoContainer,
  SavedButton,
  LikeButton,
  DislikeButton,
  ProfileImg,
} from './styledComponents'

import Header from '../Header'

import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class VideoItemDetails extends Component {
  state = {
    videoData: {},
    apiStatus: apiStatusConstants.initial,
    isLiked: false,
    isDisliked: false,
  }

  componentDidMount() {
    this.getVideoDetail()
  }

  getVideoDetail = async () => {
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })
    const {match} = this.props
    const {params} = match
    const {id} = params

    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/videos/${id}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    if (response.ok) {
      const fetchedData = await response.json()
      const videoData = {
        name: fetchedData.video_details.channel.name,
        profileImageUrl: fetchedData.video_details.channel.profile_image_url,
        subscriberCount: fetchedData.video_details.channel.subscriber_count,
        description: fetchedData.video_details.description,
        publishedAt: fetchedData.video_details.published_at,
        id: fetchedData.video_details.id,
        thumbnailUrl: fetchedData.video_details.thumbnail_url,
        title: fetchedData.video_details.title,
        videoUrl: fetchedData.video_details.video_url,
        viewCount: fetchedData.video_details.view_count,
      }
      this.setState({
        videoData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }
  }

  clickLike = () => {
    this.setState(prevState => ({
      isLiked: !prevState.isLiked,
      isDisliked: false,
    }))
  }

  clickDisLike = () => {
    this.setState(prevState => ({
      isDisliked: !prevState.isDisliked,
      isLiked: false,
    }))
  }

  renderLoaderView = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </div>
  )

  renderFailureView = () => (
    <NxtContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const failureImg = isDarkTheme
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
        return (
          <div>
            <img src={failureImg} alt="failure view" />
            <h1>Oops! Something Went Wrong</h1>
            <p>
              We are having some trouble to complete your request. Please try
              again.
            </p>
            <button type="button" onClick={this.getVideoDetail}>
              Retry
            </button>
          </div>
        )
      }}
    </NxtContext.Consumer>
  )

  renderVideoView = () => {
    const {videoData, isLiked, isDisliked} = this.state
    const {
      id,
      name,
      profileImageUrl,
      subscriberCount,
      description,
      publishedAt,
      title,
      videoUrl,
      viewCount,
    } = videoData

    return (
      <NxtContext.Consumer>
        {value => {
          const {isDarkTheme, addSavedVideos, savedVideosList} = value
          const isSaved = savedVideosList.some(each => each.id === id)
          const buttonText = isSaved ? 'Saved' : 'Save'
          const onClickAddVideos = () => {
            addSavedVideos(videoData)
          }
          return (
            <VideoContainer
              isDarkTheme={isDarkTheme}
              data-testid="videoItemDetails"
            >
              <ReactPlayer url={videoUrl} controls />
              <p>{title}</p>
              <div className="views">
                <div className="view-card">
                  <p>{viewCount} views</p>
                  <BsDot />
                  <p>{publishedAt}</p>
                </div>
                <div className="display-flex">
                  <LikeButton
                    isLiked={isLiked}
                    type="button"
                    onClick={this.clickLike}
                  >
                    <BiLike />
                    <p>Like</p>
                  </LikeButton>
                  <DislikeButton
                    isDisliked={isDisliked}
                    type="button"
                    onClick={this.clickDisLike}
                  >
                    <BiDislike />
                    <p>Dislike</p>
                  </DislikeButton>
                  <SavedButton
                    isSaved={isSaved}
                    type="button"
                    onClick={onClickAddVideos}
                  >
                    <CgPlayListAdd />
                    <p>{buttonText}</p>
                  </SavedButton>
                </div>
              </div>
              <div className="profile-card">
                <ProfileImg src={profileImageUrl} alt="channel logo" />
                <div>
                  <p>{name}</p>
                  <p>{subscriberCount} subscribers</p>
                  <p>{description}</p>
                </div>
              </div>
            </VideoContainer>
          )
        }}
      </NxtContext.Consumer>
    )
  }

  renderVideoDetails = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderVideoView()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      case apiStatusConstants.inProgress:
        return this.renderLoaderView()
      default:
        return null
    }
  }

  render() {
    return (
      <div>
        <Header />
        <div className="bg-container">
          <SideBar />
          {this.renderVideoDetails()}
        </div>
      </div>
    )
  }
}

export default VideoItemDetails
