import React from 'react'
import SelectVolume from './SelectVolume'
import VideoElement from './VideoElement'
import PropTypes from 'prop-types'

const VolumeControlsView = ({ volume, setVolume, getVolumeOptions, videoSource }) => (
  <section className='col-12'>
    <h4>Volume Controls</h4>
    <VideoElement volume={volume} className='col-8' source={videoSource} />
    <div>
      <SelectVolume volume={volume} volumeOptions={getVolumeOptions()} setVolume={setVolume} />
    </div>
  </section>
)

VolumeControlsView.propTypes = {
  volume: PropTypes.number.isRequired,
  setVolume: PropTypes.func.isRequired,
  getVolumeOptions: PropTypes.func.isRequired,
  videoSource: PropTypes.string.isRequired,
}

export default VolumeControlsView
