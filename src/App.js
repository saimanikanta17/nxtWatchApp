import {Route, Switch, Redirect} from 'react-router-dom'

import {Component} from 'react'

import LoginForm from './components/LoginForm'
import ProtectedRoute from './components/ProtectedRoute'
import Home from './components/Home'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import SavedVideos from './components/SavedVideos'
import NotFound from './components/NotFound'
import VideoItemDetails from './components/VideoItemDetails'
import NxtContext from './context/NxtContext'

import './App.css'

class App extends Component {
  state = {isDarkTheme: false, savedVideosList: []}

  changeTheme = () => {
    this.setState(prevState => ({isDarkTheme: !prevState.isDarkTheme}))
  }

  addSavedVideos = savedData => {
    const {savedVideosList} = this.state
    const result = savedVideosList.some(each => each.id === savedData.id)
    if (result) {
      const modifiedList = savedVideosList.filter(
        each => each.id !== savedData.id,
      )
      this.setState({savedVideosList: modifiedList})
    } else {
      this.setState({savedVideosList: [...savedVideosList, savedData]})
    }
  }

  render() {
    const {isDarkTheme, savedVideosList} = this.state
    return (
      <NxtContext.Provider
        value={{
          isDarkTheme,
          savedVideosList,
          changeTheme: this.changeTheme,
          addSavedVideos: this.addSavedVideos,
        }}
      >
        <Switch>
          <Route exact path="/login" component={LoginForm} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetails}
          />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="not-found" />
        </Switch>
      </NxtContext.Provider>
    )
  }
}

export default App
