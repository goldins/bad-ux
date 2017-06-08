import React from 'react'
import PropTypes from 'prop-types'

export const SelectVolume = ({ volume, setVolume, getVolumeOptions }) => (
  <div>
    <span>Volume: {volume}</span>
    {getVolumeOptions().map((opt) => (<li onClick={setVolume(opt)}>{opt}</li>))}
    <ul>
      <li>Mute</li>
    </ul>
  </div>
)

SelectVolume.propTypes = {
  volume: PropTypes.number.isRequired,
  setVolume: PropTypes.func.isRequired,
  getVolumeOptions: PropTypes.func.isRequired
}

export default SelectVolume
