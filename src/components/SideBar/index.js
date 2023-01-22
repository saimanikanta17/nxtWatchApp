import {Link} from 'react-router-dom'

const SideBar = () => (
  <div>
    <Link to="/">
      <p>Home</p>
    </Link>
    <Link to="/trending">
      <p>Trending</p>
    </Link>
    <Link to="/gaming">
      <p>Gaming</p>
    </Link>
    <Link to="/saved-videos">
      <p>Saved Videos</p>
    </Link>
  </div>
)

export default SideBar
