import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const SidebarContainer = styled.div`
  width: 200px;
  background-color: ${props =>
    props.theme === 'dark' ? '#212121' : '#f4f4f4'};
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const SidebarLink = styled(Link)`
  text-decoration: none;
  color: ${props => (props.theme === 'dark' ? '#f4f4f4' : '#212121')};
  font-weight: 600;
  padding: 10px;
  display: flex;
  align-items: center;

  &:hover {
    color: #ff9900; /* Optional: Change color on hover */
  }
`

export const LogoIcons = styled.img`
  width: 40px;
  margin: 0px 6px 0px 0px;
`

export const ContactUsContainer = styled.div`
  padding: 7px;
`

export const Text = styled.p`
  font-weight: 600;
  color: ${props => (props.theme === 'dark' ? '#f4f4f4' : '#212121')};
  text-decoration: none;
`
