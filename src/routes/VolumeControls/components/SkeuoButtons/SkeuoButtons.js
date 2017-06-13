import React from 'react'
import PropTypes from 'prop-types'
import VolumeOption from '../VolumeOption'
import './SkeuoButtons.scss'

class SkeuoButtons extends React.Component {
  render () {
    return (
      <ul className='skeuo-buttons'>
        <VolumeOption
          clickHandler={() => this.props.decreaseVolume()}
          displayValue='Decrease Volume'
          itemClassName='skeuo-buttons__item'
        />
        <VolumeOption
          clickHandler={() => this.props.increaseVolume()}
          displayValue='Increase Volume'
          itemClassName='skeuo-buttons__item'
        />
      </ul>
    )
  }
}

SkeuoButtons.propTypes = {
  increaseVolume: PropTypes.func.isRequired,
  decreaseVolume: PropTypes.func.isRequired
}

export default SkeuoButtons
