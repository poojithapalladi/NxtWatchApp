import styled from 'styled-components'

export const MainBody = styled.div`
  display: flex;
  background-color: ${props =>
    props.theme === 'dark' ? '#181818' : '#f9f9f9'};
  min-height: 100vh;
`

export const SidebarContainer = styled.div`
  flex-shrink: 0;
  width: 240px;
`

export const NotFoundContainer = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${props =>
    props.theme === 'dark' ? '#0f0f0f' : '#ffffff'};
  color: ${props => (props.theme === 'dark' ? '#ffffff' : '#000000')};
  text-align: center;
  padding: 20px;
`

export const NotFoundImage = styled.img`
  width: 300px;
  max-width: 100%;
  margin-bottom: 16px;
`

export const NotFoundText = styled.h1`
  font-size: 24px;
  color: ${props => (props.theme === 'dark' ? '#ffffff' : '#000000')};
  margin: 0;
  margin-bottom: 8px;

  &.p {
    font-size: 16px;
    margin-top: 0;
    color: ${props => (props.theme === 'dark' ? '#cccccc' : '#606060')};
  }
`
export const NotFoundText2 = styled.p`
  font-size: 14px;
  color: ${props => (props.theme === 'dark' ? '#ffffff' : '#000000')};
  margin: 0;
  margin-bottom: 8px;

  &.p {
    font-size: 16px;
    margin-top: 0;
    color: ${props => (props.theme === 'dark' ? '#cccccc' : '#606060')};
  }
`
