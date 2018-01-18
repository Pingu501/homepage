import React from 'react'
import PropTypes from 'prop-types'
import { Parallax } from 'react-parallax'

const Teaser = props => {

  const backgroundImageStyle = {
    backgroundImage: `url(${props.picture})`
  }

  return (
    <div className="teaser__wrapper">
      <Parallax bgImage={props.picture} strength={400} className="teaser teaser__parallax">
        {props.text ? <div className="teaser__content">
          <p>{props.text}</p>
        </div> : ''}
      </Parallax>

      <div className="teaser teaser__mobile" style={backgroundImageStyle}>
        {props.text ? <div className="teaser__content">
          <p>{props.text}</p>
        </div> : ''}
      </div>
    </div>
  )
}

Teaser.propTypes = {
  picture: PropTypes.any.isRequired,
  text: PropTypes.string
}

export default Teaser
