import styled from 'styled-components'

export const LoginContainer = styled.div`
  height: 100vh;
  width: 100vw;
  font-family: 'Roboto';
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
  padding: 20px;
  box-shadow: 0px 4px 16px 0px #bfb;
`
export const InputLabel = styled.label`
  display: flex;
  flex-direction: column;
`
export const ErrorMsg = styled.p`
  color: #ff0000;
`
export const LogInButton = styled.button`
  height: 30px;
  width: 100px;
  background-color: #3b82f6;
`
