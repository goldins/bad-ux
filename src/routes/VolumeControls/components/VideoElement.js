import React from 'react'
import PropTypes from 'prop-types'

export const VideoElement = ({ source, className }) => (
  <video autoPlay src={source} className={className} />
)

VideoElement.propTypes = {
  source: PropTypes.string.isRequired,
  className: PropTypes.string
}

export default VideoElement
