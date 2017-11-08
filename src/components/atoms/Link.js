import React from 'react'
import PropTypes from 'prop-types'

const Link = props => {

  let target, ref

  if (props.mail) {
    target = ''
    ref = ''
  } else {
    target = '_blank'
    ref = 'noopener noreferrer'
  }

  return (
    <a href={props.destination} target={target} role={ref}>
      {props.text}
    </a>
  )
}

Link.propTypes = {
  destination: PropTypes.string.isRequired,
  text: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]).isRequired,
  mail: PropTypes.bool
}

export default Link
