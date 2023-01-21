import styled from 'styled-components'

export const ThemeButton = styled.button`
  background-color: transparent;
  border-style: solid;
  border-width: 1px;
  width: 100px;
  height: 40px;
  color: ${props => (props.isDarkTheme ? '#f9f9f9' : '#3b82f6')};
  border-color: ${props => (props.isDarkTheme ? '#f9f9f9' : '#3b82f6')};
  font-size: 20px;
`
export const LogOutCard = styled.div`
  width: 450px;
  height: 160px;
  padding: 10px;
  border-radius: 10px;
  color: ${props => (props.isDarkTheme ? '#f9f9f9' : '#00306e')};
  background-color: ${props => (props.isDarkTheme ? '#424242' : '#ffffff')};
  font-size: 20px;
  text-align: center;
`
export const CancelButton = styled.button`
  background-color: transparent;
  border-style: solid;
  border-width: 1px;
  width: 100px;
  height: 40px;
  color: #909090;
  border-color: #909090;
  font-size: 20px;
  margin-right: 30px;
  margin-top: 10px;
  border-radius: 6px;
`
export const ConfirmButton = styled.button`
  background-color: #3b82f6;
  width: 100px;
  height: 40px;
  color: #ffffff;
  font-size: 18px;
  border-style: none;
  border-radius: 6px;
  margin-top: 10px;
`
