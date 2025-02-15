import {Link} from 'react-router-dom'

import ThemeContext from '../../context/ThemeContext'
import ActiveMenuContext from '../../context/ActiveMenuContext'

import {
  VideoCardContainer,
  Thumbnail,
  ThumbnailText,
  VideoTitle,
  VideoTextContainer,
  VideoDetailsContainer,
  VideoDetailsText,
  GamingLink,
} from './styledComponents'

const GamingBody = props => {
  const {videoDetails} = props
  const {thumbnailUrl, viewCount, title, id} = videoDetails

  const card = value => {
    const {isDarkTheme} = value
    const theme = isDarkTheme ? 'dark' : 'light'
    return (
      <ActiveMenuContext.Consumer>
        {val => {
          const {changeActiveMenu} = val

          return (
            <VideoCardContainer>
              <GamingLink
                as={Link}
                to={`/videos/${id}`}
                onClick={() => changeActiveMenu('INITIAL')}
              >
                <Thumbnail src={thumbnailUrl} alt="video thumbnail" />
                <ThumbnailText>
                  <VideoTextContainer>
                    <VideoTitle theme={theme}>{title}</VideoTitle>
                    <VideoDetailsContainer>
                      <VideoDetailsText>
                        {viewCount} Watching Worldwide
                      </VideoDetailsText>
                    </VideoDetailsContainer>
                  </VideoTextContainer>
                </ThumbnailText>
              </GamingLink>
            </VideoCardContainer>
          )
        }}
      </ActiveMenuContext.Consumer>
    )
  }

  return <ThemeContext.Consumer>{value => card(value)}</ThemeContext.Consumer>
}

export default GamingBody
