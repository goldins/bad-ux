import React from 'react'
import PropTypes from 'prop-types'

class VolumeOption extends React.Component {
  render () {
    return (
      <li
        className='select-volume-item'
        onClick={this.props.clickHandler}>
        {this.props.displayValue}
      </li>
    )
  }
}

VolumeOption.propTypes = {
  clickHandler: PropTypes.func.isRequired,
  displayValue: PropTypes.string.isRequired
}

export default VolumeOption
