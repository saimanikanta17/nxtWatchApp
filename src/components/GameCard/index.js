import {Link} from 'react-router-dom'

import NxtContext from '../../context/NxtContext'
import {GameThumbnailImg, GamingListItem} from './styledComponents'

const GameCard = props => {
  const {game} = props
  const {id, thumbnailUrl, title, viewCount} = game

  return (
    <NxtContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        return (
          <Link to={`/videos/${id}`} className="link">
            <GamingListItem isDarkTheme={isDarkTheme}>
              <GameThumbnailImg src={thumbnailUrl} alt={title} />
              <p>{title}</p>
              <p>{viewCount} Watching Worldwide</p>
            </GamingListItem>
          </Link>
        )
      }}
    </NxtContext.Consumer>
  )
}

export default GameCard
