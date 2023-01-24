import {Link} from 'react-router-dom'

import {formatDistanceToNow} from 'date-fns'

import {BsDot} from 'react-icons/bs'

import {ThumbnailImg, ProfileImg, VideoListItem} from './styledComponents'
import NxtContext from '../../context/NxtContext'

import './index.css'

const VideoCard = props => {
  const {video} = props
  const {
    id,
    name,
    profileImageUrl,
    publishedAt,
    thumbnailUrl,
    title,
    viewCount,
  } = video
  const gap = formatDistanceToNow(new Date(publishedAt))
  return (
    <NxtContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        return (
          <Link to={`/videos/${id}`} className="link">
            <VideoListItem isDarkTheme={isDarkTheme}>
              <ThumbnailImg src={thumbnailUrl} alt="video thumbnail" />
              <div className="profile-card">
                <ProfileImg src={profileImageUrl} alt="channel logo" />
                <div>
                  <p>{title}</p>
                  <p>{name}</p>
                  <div className="view-card">
                    <p>{viewCount} views</p>
                    <BsDot />
                    <p>{gap}</p>
                  </div>
                </div>
              </div>
            </VideoListItem>
          </Link>
        )
      }}
    </NxtContext.Consumer>
  )
}

export default VideoCard
