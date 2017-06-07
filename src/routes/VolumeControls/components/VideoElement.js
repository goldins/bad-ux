import React from 'react'
import PropTypes from 'prop-types'

export const VideoElement = source => (
  <video autoPlay>
    <source href={JSON.stringify(source)} />
  </video>
)

VideoElement.propTypes = {
  source: PropTypes.string.isRequired
}

export default VideoElement
