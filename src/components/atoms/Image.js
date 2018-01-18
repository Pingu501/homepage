import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const Image = props => {

  const className = classnames(
    'image',
    {'image--floating': props.floating},
    {'image--logo': props.type === 'logo'}
  )

  return (
    <figure>
      <img src={props.image} className={className} alt={props.alt}/>
    </figure>
  )
}

Image.propTypes = {
  image: PropTypes.any.isRequired,
  alt: PropTypes.string.isRequired,
  floating: PropTypes.bool,
  type: PropTypes.oneOf(['logo'])
}

export default Image
