import React from 'react'
import PropTypes from 'prop-types'

const TwoColumn = props => {
  return (
    <div className="two-column">
      <div className="column">
        {props.left}
      </div>
      <div className="column">
        {props.right}
      </div>
    </div>
  )
}

TwoColumn.propTypes = {
  left: PropTypes.element.isRequired,
  right: PropTypes.element.isRequired
}

export default TwoColumn
