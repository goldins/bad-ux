import React from 'react'
import PropTypes from 'prop-types'
import VolumeOption from './VolumeOption'
import styles from './SelectVolume.scss'

class SelectVolume extends React.Component {
  render () {
    return (
      <div>
        <span>Volume: {this.props.volume}</span>
        <ul>
          {this.props.volumeOptions.map((opt) => (
            <VolumeOption
              key={opt}
              volVal={opt}
              clickHandler={() => this.props.setVolume(opt)}
              displayValue={opt !== 0 ? opt.toString() : 'Mute'}
            />
          ))}
        </ul>
      </div>
    )
  }
}

SelectVolume.propTypes = {
  volume: PropTypes.number.isRequired,
  setVolume: PropTypes.func.isRequired,
  volumeOptions: PropTypes.array.isRequired
}

export default SelectVolume
