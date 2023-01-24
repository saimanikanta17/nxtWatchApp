import styled from 'styled-components'

export const VideoContainer = styled.div`
  background-color: ${props => (props.isDarkTheme ? '#0f0f0f' : '#f9f9f9')};
  color: ${props => (props.isDarkTheme ? '#f9f9f9' : '#0f0f0f')};
  padding: 20px;
`
export const SavedButton = styled.button`
  color: ${props => (props.isSaved ? '#2563eb' : '#64748b')};
  background-color: transparent;
  border-style: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 65px;
  font-size: 14px;
`
export const LikeButton = styled.button`
  color: ${props => (props.isLiked ? '#2563eb' : '#64748b')};
  background-color: transparent;
  border-style: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 60px;
  font-size: 14px;
`
export const DislikeButton = styled.button`
  color: ${props => (props.isDisliked ? '#2563eb' : '#64748b')};
  background-color: transparent;
  border-style: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 75px;
  font-size: 14px;
`
export const ProfileImg = styled.img`
  width: 60px;
  height: 60px;
  margin-right: 20px;
  margin-top: 20px;
`
