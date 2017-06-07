import { connect } from 'react-redux'
import { getVolumeOptions, setVolume } from '../modules/volume'
import VideoSource from '../assets/SampleVideo_1280x720_1mb.mp4'
import VolumeControls from '../components/VolumeControlsView'

const mapDispatchToProps = {
  setVolume: () => setVolume(1),
  getVolumeOptions: getVolumeOptions,
  videoSource: VideoSource
}

const mapStateToProps = (state) => ({
  volume: state.volume
})

export default connect(mapStateToProps, mapDispatchToProps)(VolumeControls)
