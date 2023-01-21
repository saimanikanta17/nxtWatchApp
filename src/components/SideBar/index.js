import {AiFillHome} from 'react-icons/ai'

import {MdLocalFireDepartment} from 'react-icons/md'

import {SiYoutubegaming} from 'react-icons/si'

const SideBar = () => (
  <div>
    <div>
      <AiFillHome />
      <p>Home</p>
    </div>
    <div>
      <MdLocalFireDepartment />
      <p>Trending</p>
    </div>
    <div>
      <SiYoutubegaming />
      <p>Gaming</p>
    </div>
    <div>
      <AiFillHome />
      <p>Saved Videos</p>
    </div>
  </div>
)

export default SideBar
