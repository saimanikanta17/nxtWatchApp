import {NotFoundImg, NotFoundContainer} from './styledComponents'
import NxtContext from '../../context/NxtContext'

const NotFound = () => (
  <NxtContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const notFoundTheme = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
      return (
        <NotFoundContainer isDarkTheme={isDarkTheme}>
          <NotFoundImg src={notFoundTheme} alt="not-found" />
          <p>Page Not Found</p>
          <p>We are sorry the page requested could not be found</p>
        </NotFoundContainer>
      )
    }}
  </NxtContext.Consumer>
)

export default NotFound
