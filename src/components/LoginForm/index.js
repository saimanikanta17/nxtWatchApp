import {Component} from 'react'
import Cookies from 'js-cookie'

import {
  LoginContainer,
  LogoImage,
  LogInform,
  InputLabel,
  ErrorMsg,
  LogInButton,
} from './styledComponents'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    showPassword: false,
    showErrorMsg: false,
    errorMsg: '',
  }

  changeUsername = event => {
    this.setState({username: event.target.value})
  }

  changePassword = event => {
    this.setState({password: event.target.value})
  }

  toggleShowPassword = () => {
    this.setState(prevState => ({showPassword: !prevState.showPassword}))
  }

  loginSuccess = jwtToken => {
    const {history} = this.props

    Cookies.set('jwt_token', jwtToken, {
      expires: 30,
    })
    history.replace('/')
  }

  loginFailure = errorMsg => {
    console.log(errorMsg)
    this.setState({showErrorMsg: true, errorMsg})
  }

  submitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.loginSuccess(data.jwt_token)
    } else {
      this.loginFailure(data.error_msg)
    }
  }

  renderUsernameInput = () => {
    const {username} = this.state
    return (
      <>
        <InputLabel>
          USERNAME
          <input
            type="text"
            value={username}
            placeholder="Username"
            onChange={this.changeUsername}
          />
        </InputLabel>
      </>
    )
  }

  renderPasswordInput = () => {
    const {password, showPassword} = this.state
    const inputType = showPassword ? 'text' : 'password'
    return (
      <>
        <InputLabel>
          PASSWORD
          <input
            type={inputType}
            value={password}
            placeholder="Password"
            onChange={this.changePassword}
          />
        </InputLabel>
      </>
    )
  }

  showPassword = () => {
    const {showPassword} = this.state
    return (
      <>
        <label>
          <input
            checked={showPassword}
            type="checkbox"
            onChange={this.toggleShowPassword}
          />
          Show Password
        </label>
      </>
    )
  }

  render() {
    const {showErrorMsg, errorMsg} = this.state
    return (
      <LoginContainer>
        <LogInform onSubmit={this.submitForm}>
          <LogoImage
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
            alt="nxt-watch-logo"
          />
          <div>{this.renderUsernameInput()}</div>
          <div>{this.renderPasswordInput()}</div>
          <div>{this.showPassword()}</div>
          <LogInButton type="submit">Login</LogInButton>
          {showErrorMsg && <ErrorMsg>*{errorMsg}</ErrorMsg>}
        </LogInform>
      </LoginContainer>
    )
  }
}

export default LoginForm
