import React from 'react'
import SelectVolume from './SelectVolume'
import VideoSource from '../assets/SampleVideo_1280x720_1mb.mp4'
import VideoElement from './VideoElement'
import { connect } from 'react-redux'
import { setVolume } from '../modules/volume'

// todo: SRP: this is kind of acting like a container + component.
const mapDispatchToProps = {
  setVolume: () => setVolume(1),
  videoSource: VideoSource
}

const mapStateToProps = (state) => ({
  volume: state.volume
})

const VolumeControlsView = (videoSource, setVolume) => (
  <section className='col-12'>
    <h4>Volume Controls</h4>
    <VideoElement source={videoSource} />
    <div>
      <SelectVolume volume='1' setVolume={setVolume} />
    </div>
    <div>
      <SelectVolume volume='1' setVolume={setVolume} />
    </div>
  </section>
)

export default connect(mapStateToProps, mapDispatchToProps)(VolumeControlsView)
