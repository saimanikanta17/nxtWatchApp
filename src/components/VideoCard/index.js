import {Link} from 'react-router-dom'

import {formatDistanceToNow} from 'date-fns'

import {BsDot} from 'react-icons/bs'

import {ThumbnailImg, ProfileImg, VideoListItem} from './styledComponents'

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
    <Link to={`/videos/${id}`} className="link">
      <VideoListItem>
        <ThumbnailImg src={thumbnailUrl} alt={title} />
        <div className="profile-card">
          <ProfileImg src={profileImageUrl} alt={name} />
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
}

export default VideoCard
