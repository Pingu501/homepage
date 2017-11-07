import React from 'react'
import PropTypes from 'prop-types'

const Teaser = props => {

  const backgroundImageStyle = {
    backgroundImage: `url(${props.picture})`
  }

  return (
    <div className="teaser__wrapper">
      <div className="teaser" style={backgroundImageStyle}>

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

export default Teaser;
