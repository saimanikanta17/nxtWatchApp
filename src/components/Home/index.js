import {Component} from 'react'

import Cookies from 'js-cookie'

import Header from '../Header'

import VideoCard from '../VideoCard'

import {VideosUnorderedList} from './styledComponents'

import SideBar from '../SideBar'

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
    this.getVideosDetails()
  }

  getVideosDetails = async () => {
    const {searchInput} = this.state
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/videos/all?search=${searchInput}`
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

  render() {
    const {VideosList, apiStatus} = this.state
    return (
      <div>
        <Header />
        <div className="bg-container">
          <SideBar />
          <div>
            <VideosUnorderedList>
              {VideosList.map(video => (
                <VideoCard video={video} key={video.id} />
              ))}
            </VideosUnorderedList>
          </div>
        </div>
      </div>
    )
  }
}
export default Home
