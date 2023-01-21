import {Route, Switch, Redirect} from 'react-router-dom'

import {Component} from 'react'

import LoginForm from './components/LoginForm'
import ProtectedRoute from './components/ProtectedRoute'
import Home from './components/Home'
import NotFound from './components/NotFound'
import NxtContext from './context/NxtContext'

import './App.css'

class App extends Component {
  state = {isDarkTheme: false}

  changeTheme = () => {
    this.setState(prevState => ({isDarkTheme: !prevState.isDarkTheme}))
  }

  render() {
    const {isDarkTheme} = this.state
    return (
      <NxtContext.Provider
        value={{
          isDarkTheme,
          changeTheme: this.changeTheme,
        }}
      >
        <Switch>
          <Route exact path="/login" component={LoginForm} />
          <ProtectedRoute exact path="/" component={Home} />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="not-found" />
        </Switch>
      </NxtContext.Provider>
    )
  }
}

export default App
