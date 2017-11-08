import React from 'react'
import PropTypes from 'prop-types'
import { Parallax } from 'react-parallax'

const Teaser = props => {
  return (
    <div className="teaser__wrapper">
      <Parallax bgImage={props.picture} strength={400} className="teaser">
        {props.text ? <div className="teaser__content">
          <p>{props.text}</p>
        </div> : ''}
      </Parallax>
    </div>
  )
}

Teaser.propTypes = {
  picture: PropTypes.any.isRequired,
  text: PropTypes.string
}

export default Teaser
