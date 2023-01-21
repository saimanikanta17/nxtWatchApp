import React from 'react'

const NxtContext = React.createContext({
  isDarkTheme: false,
  changeTheme: () => {},
})

export default NxtContext
