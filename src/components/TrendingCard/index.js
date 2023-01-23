import {Link} from 'react-router-dom'

import {formatDistanceToNow} from 'date-fns'

import {BsDot} from 'react-icons/bs'

import NxtContext from '../../context/NxtContext'
import {TrendingThumbnailImg, TrendingListItem} from './styledComponents'

const TrendingCard = props => {
  const {trending} = props
  const {id, thumbnailUrl, title, viewCount, publishedAt, name} = trending
  const gap = formatDistanceToNow(new Date(publishedAt))

  return (
    <NxtContext.Consumer>
      {value => {
        const {isDarkTheme} = value

        return (
          <Link to={`/videos/${id}`} className="link">
            <TrendingListItem isDarkTheme={isDarkTheme}>
              <TrendingThumbnailImg src={thumbnailUrl} alt={title} />
              <div>
                <p>{title}</p>
                <p>{name}</p>
                <div className="view-card">
                  <p>{viewCount} views</p>
                  <BsDot />
                  <p>{gap}</p>
                </div>
              </div>
            </TrendingListItem>
          </Link>
        )
      }}
    </NxtContext.Consumer>
  )
}

export default TrendingCard
