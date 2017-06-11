import React from 'react'
import PropTypes from 'prop-types'

class VideoElement extends React.Component {
  render () {
    this.uniqueId = 'video_' + Math.random()
    return (
      <video loop autoPlay
        id={this.uniqueId}
        src={this.props.source}
        className={this.props.className}
      />
    )
  }

  componentDidMount () {
    // todo: maybe there's a better way to get the video element?
    this.videoEl = document.getElementById(this.uniqueId)
    this.videoEl.volume = this.props.volume / 100
  }

  componentWillReceiveProps (nextProps) {
    this.videoEl.volume = nextProps.volume / 100
  }
}

VideoElement.propTypes = {
  volume: PropTypes.number.isRequired,
  source: PropTypes.string.isRequired,
  className: PropTypes.string
}

export default VideoElement
