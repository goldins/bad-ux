import React from 'react'
import PropTypes from 'prop-types'
import VolumeOption from './VolumeOption'
import './SelectVolume.scss'

class SelectVolume extends React.Component {
  render () {
    return (
      <ul>
        {this.props.volumeOptions.map((opt) => (
          <VolumeOption
            key={opt}
            clickHandler={() => this.props.setVolume(opt)}
            displayValue={opt !== 0 ? opt.toString() : 'Mute'}
            itemClassName={'select-volume-item' + (opt === this.props.volume ? '--active' : '')}
          />
        ))}
      </ul>
    )
  }
}

SelectVolume.propTypes = {
  volume: PropTypes.number.isRequired,
  setVolume: PropTypes.func.isRequired,
  volumeOptions: PropTypes.array.isRequired
}

export default SelectVolume
