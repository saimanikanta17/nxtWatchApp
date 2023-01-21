import {NotFoundImg, NotFoundContainer} from './styledComponents'

const NotFound = () => (
  <NotFoundContainer>
    <NotFoundImg
      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png"
      alt="not-found"
    />
    <p>Page Not Found</p>
    <p>We are sorry the page requested could not be found</p>
  </NotFoundContainer>
)

export default NotFound
