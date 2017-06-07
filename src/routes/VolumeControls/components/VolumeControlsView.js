import React from 'react'
import SelectVolume from './SelectVolume'
import VideoElement from './VideoElement'

const VolumeControlsView = (setVolume, getVolumeOptions, videoSource) => (
  <section className='col-12'>
    <h4>Volume Controls</h4>
    <VideoElement source={videoSource} />
    <div>
      {getVolumeOptions}
      <SelectVolume volume={parseInt(1)} getVolumeOptions={getVolumeOptions} setVolume={setVolume} />
    </div>
  </section>
)

export default VolumeControlsView
