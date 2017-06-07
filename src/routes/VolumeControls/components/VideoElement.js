import React from 'react'
import PropTypes from 'prop-types'

export const VideoElement = () => (
  <video autoPlay className='col-10' src={Video} />
)

VideoElement.propTypes = {
  source: PropTypes.string.isRequired
}

export default VideoElement
