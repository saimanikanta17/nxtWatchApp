import {Component} from 'react'

import Cookies from 'js-cookie'

import ReactPlayer from 'react-player'

import {BiLike, BiDislike} from 'react-icons/bi'

import {BsDot} from 'react-icons/bs'

import {CgPlayListAdd} from 'react-icons/cg'

import SideBar from '../SideBar'

import NxtContext from '../../context/NxtContext'

import {VideoContainer} from './styledComponents'

import Header from '../Header'

import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class VideoItemDetails extends Component {
  state = {videoData: {}, apiStatus: apiStatusConstants.initial}

  componentDidMount() {
    this.getVideoDetail()
  }

  getVideoDetail = async () => {
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

  render() {
    const {videoData} = this.state
    const {
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
          const {isDarkTheme} = value

          return (
            <>
              <Header />
              <div className="bg-container">
                <SideBar />
                <VideoContainer isDarkTheme={isDarkTheme}>
                  <ReactPlayer url={videoUrl} controls />
                  <p>{title}</p>
                  <div>
                    <div className="view-card">
                      <p>{viewCount} views</p>
                      <BsDot />
                      <p>{publishedAt}</p>
                    </div>
                    <div>
                      <div>
                        <BiLike />
                        <p>Like</p>
                      </div>
                      <div>
                        <BiDislike />
                        <p>Dislike</p>
                      </div>
                      <div>
                        <CgPlayListAdd />
                        <p>Save</p>
                      </div>
                    </div>
                  </div>
                  <div className="profile-card">
                    <img src={profileImageUrl} alt={name} />
                    <div>
                      <p>{name}</p>
                      <p>{subscriberCount} subscribers</p>
                      <p>{description}</p>
                    </div>
                  </div>
                </VideoContainer>
              </div>
            </>
          )
        }}
      </NxtContext.Consumer>
    )
  }
}

export default VideoItemDetails
