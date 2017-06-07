import React from 'react'
import PropTypes from 'prop-types'

export const SelectVolumeView = (volume, setVolume) => (
  <div>
    <span>Volume: {volume}</span>
    <span>Mute</span>
    <span>1</span>
    <span>2</span>
    <span>3</span>
    <span>4</span>
    <span>5</span>
    <span>6</span>
  </div>
)

SelectVolumeView.propTypes = {
  volume: PropTypes.number.isRequired,
  setVolume: PropTypes.func.isRequired
}

export default SelectVolumeView
