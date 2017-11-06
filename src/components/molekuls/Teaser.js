import React from 'react';
import PropTypes from 'prop-types';

const Teaser = props => {

  const backgroundImageStyle = {
    backgroundImage: `url(${props.picture})`
  }

  return (
    <div className="teaser__wrapper">
      <div className="teaser" style={backgroundImageStyle}>
        <div className="teaser__content">
          {props.text}
        </div>
      </div>
    </div>
  )
}

Teaser.propTypes = {
  picture: PropTypes.any.isRequired,
  text: PropTypes.string
}

export default Teaser;
