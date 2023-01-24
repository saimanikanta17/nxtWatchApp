import React from 'react'

const NxtContext = React.createContext({
  isDarkTheme: false,
  savedVideosList: [],
  changeTheme: () => {},
  addSavedVideos: () => {},
})

export default NxtContext
