import styled from 'styled-components'

export const LoginContainer = styled.div`
  height: 100vh;
  width: 100vw;
  font-family: 'Roboto';
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${props => (props.isDarkTheme ? '#212121' : ' #f9f9f9')};
`
export const LogoImage = styled.img`
  height: 30px;
  width: 130px;
  align-self: center;
  margin: 20px;

  @media screen and (min-width: 768px) {
    height: 45px;
    width: 180px;
  }
`
export const LogInform = styled.form`
  display: flex;
  flex-direction: column;
  padding: 30px;
  box-shadow: ${props => !props.isDarkTheme && '0px 4px 16px 0px #cccccc'};
  border-radius: 6px;
  background-color: ${props => (props.isDarkTheme ? '#000000' : '#ffffff')};
`
export const InputLabel = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  font-size: 14px;
  color: #909090;
  font-weight: bold;
`
export const ErrorMsg = styled.p`
  color: #ff0000;
  margin: 0px;
`
export const LogInButton = styled.button`
  height: 35px;
  width: 300px;
  background-color: #3b82f6;
  border-style: none;
  align-self: center;
  margin-top: 20px;
  margin-bottom: 20px;
  color: #ffffff;
  border-radius: 6px;
  font-size: 20px;
`
export const InputType = styled.input`
  width: 300px;
  height: 40px;
  padding: 10px;
  margin-top: 10px;
  border-radius: 6px;
  border: 1px solid #909090;
  font-size: 16px;
  color: #909090;
  background-color: transparent;
`
export const ShowLabel = styled.label`
  display: flex;
  align-items: center;
  font-size: 16px;
  color: #909090;
`
