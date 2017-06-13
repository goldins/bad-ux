import React from 'react'
import SelectVolume from './SelectVolume/SelectVolume'
import SkeuoButtons from './SkeuoButtons/SkeuoButtons'
import VideoElement from './VideoElement'
import PropTypes from 'prop-types'
import './VolumeControlsView.scss'

const VIEWS = {
  SELECT: 'SELECT',
  BUTTONS: 'BUTTONS'
}

// probably not a react way of doing things
// todo: hold state somewhere better and fix onClick
let selectedView = VIEWS.SELECT

const VolumeControlsView = ({ volume, setVolume, increaseVolume, decreaseVolume, getVolumeOptions, videoSource }) => (
  <section className='volume-controls-view col-12'>
    <h4>Volume Controls</h4>
    <ul className='volume-controls-view__ux-list'>
      <li onClick={() => { selectedView = VIEWS.SELECT }}>Select</li>
      <li onClick={() => { selectedView = VIEWS.BUTTONS }}>Skeuomorphic Buttons</li>
    </ul>
    <VideoElement volume={volume} className='col-8' source={videoSource} />
    <div className={selectedView !== VIEWS.SELECT ? 'volume-controls-view__wrapper--hide' : ''}>
      <SelectVolume volume={volume} volumeOptions={getVolumeOptions()} setVolume={setVolume} />
    </div>
    <div className={selectedView !== VIEWS.BUTTONS ? 'volume-controls-view__wrapper--hide' : ''}>
      <SkeuoButtons increaseVolume={increaseVolume} decreaseVolume={decreaseVolume} />
    </div>
  </section>
)

VolumeControlsView.propTypes = {
  volume: PropTypes.number.isRequired,
  setVolume: PropTypes.func.isRequired,
  increaseVolume: PropTypes.func.isRequired,
  decreaseVolume: PropTypes.func.isRequired,
  getVolumeOptions: PropTypes.func.isRequired,
  videoSource: PropTypes.string.isRequired,
}

export default VolumeControlsView
