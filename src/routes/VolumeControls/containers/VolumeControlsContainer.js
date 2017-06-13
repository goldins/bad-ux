import { connect } from 'react-redux'
import { getVolumeOptions, setVolume, increaseVolume, decreaseVolume } from '../modules/volume'
import VideoSource from '../assets/SampleVideo_1280x720_1mb.mp4'
import VolumeControlsView from '../components/VolumeControlsView'

const mapDispatchToProps = {
  setVolume,
  increaseVolume,
  decreaseVolume,
  getVolumeOptions,
}

const mapStateToProps = (state) => ({
  volume: state.volume,
  videoSource: VideoSource
})

export default connect(mapStateToProps, mapDispatchToProps)(VolumeControlsView)
