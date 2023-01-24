import {Link} from 'react-router-dom'

import {formatDistanceToNow} from 'date-fns'

import {BsDot} from 'react-icons/bs'

import NxtContext from '../../context/NxtContext'
import {ThumbnailImg, ListItem} from './styledComponents'

const SavedVideoCard = props => {
  const {video} = props
  const {id, thumbnailUrl, title, viewCount, publishedAt, name} = video
  const gap = formatDistanceToNow(new Date(publishedAt))

  return (
    <NxtContext.Consumer>
      {value => {
        const {isDarkTheme} = value

        return (
          <Link to={`/videos/${id}`} className="link">
            <ListItem isDarkTheme={isDarkTheme}>
              <ThumbnailImg src={thumbnailUrl} alt="video thumbnail" />
              <div>
                <p>{title}</p>
                <p>{name}</p>
                <div className="view-card">
                  <p>{viewCount} views</p>
                  <BsDot />
                  <p>{gap}</p>
                </div>
              </div>
            </ListItem>
          </Link>
        )
      }}
    </NxtContext.Consumer>
  )
}

export default SavedVideoCard
