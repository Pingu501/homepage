import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const Heading = props => {
  const className = classnames('heading', {
    ['heading--' + props.size]: props.size
  })

  return (
    <div className={className}>
      {props.children}
    </div>
  )
}

Heading.propTypes = {
  children: PropTypes.any.isRequired,
  size: PropTypes.oneOf(['small', 'medium', 'large'])
}

export default Heading
