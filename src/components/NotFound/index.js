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
          <NotFoundImg src={notFoundTheme} alt="not found" />
          <h1>Page Not Found</h1>
          <p>we are sorry, the page you requested could not be found.</p>
        </NotFoundContainer>
      )
    }}
  </NxtContext.Consumer>
)

export default NotFound
