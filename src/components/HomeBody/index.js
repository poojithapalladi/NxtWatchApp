import {Link} from 'react-router-dom'
import {formatDistanceToNow} from 'date-fns'

import ThemeContext from '../../context/ThemeContext'
import ActiveMenuContext from '../../context/ActiveMenuContext'

import {
  VideoCardContainer,
  Thumbnail,
  ChannelLogo,
  ThumbnailText,
  VideoTitle,
  HomeLink,
  VideoTextContainer,
  VideoDetailsContainer,
  VideoDetailsContainer2,
  VideoDetailsText,
} from './styledComponents'

const VideoCard = props => {
  const {videoDetails} = props
  const {
    thumbnailUrl,
    channel,
    viewCount,
    title,
    id,
    publishedAt,
  } = videoDetails

  let postedAt = formatDistanceToNow(new Date(publishedAt))
  const postedAtList = postedAt.split(' ')

  if (postedAtList.length === 3) {
    postedAtList.shift()
    postedAt = postedAtList.join(' ')
  }

  const {name, profileImageUrl} = channel

  const card = value => {
    const {isDarkTheme} = value
    const theme = isDarkTheme ? 'dark' : 'light'

    return (
      <ActiveMenuContext.Consumer>
        {val => {
          const {changeActiveMenu} = val
          return (
            <VideoCardContainer as="li">
              <HomeLink
                as={Link}
                to={`/videos/${id}`}
                onClick={() => changeActiveMenu('INITIAL')}
              >
                <Thumbnail src={thumbnailUrl} alt="video thumbnail" />
                <ThumbnailText>
                  <div>
                    <ChannelLogo src={profileImageUrl} alt="channel logo" />
                  </div>
                  <VideoTextContainer>
                    <VideoTitle theme={theme}>{title}</VideoTitle>
                    <VideoDetailsContainer>
                      <VideoDetailsText>{name}</VideoDetailsText>
                      <VideoDetailsContainer2>
                        <VideoDetailsText>{viewCount} views</VideoDetailsText>
                        <VideoDetailsText>{postedAt} ago</VideoDetailsText>
                      </VideoDetailsContainer2>
                    </VideoDetailsContainer>
                  </VideoTextContainer>
                </ThumbnailText>
              </HomeLink>
            </VideoCardContainer>
          )
        }}
      </ActiveMenuContext.Consumer>
    )
  }

  return <ThemeContext.Consumer>{value => card(value)}</ThemeContext.Consumer>
}

export default VideoCard
