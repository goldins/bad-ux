import React from 'react'
import PropTypes from 'prop-types'

class VolumeOption extends React.Component {
  render () {
    return (
      <li
        className={this.props.itemClassName}
        onClick={this.props.clickHandler}>
        {this.props.displayValue}
      </li>
    )
  }
}

VolumeOption.propTypes = {
  clickHandler: PropTypes.func.isRequired,
  displayValue: PropTypes.string.isRequired,
  itemClassName: PropTypes.string
}

export default VolumeOption
