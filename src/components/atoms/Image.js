import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const Image = props => {

  const className = classnames({'image--floating': props.floating});

  return (
    <img src={props.image} className={className} alt={props.alt}/>
  )
}

Image.propTypes = {
  image: PropTypes.any.isRequired,
  alt: PropTypes.string.isRequired,
  floating: PropTypes.bool
}

export default Image
