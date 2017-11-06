import React from 'react';
import PropTypes from 'prop-types';

const Social = props => {
  return (
    <div>
      {props.link}
    </div>
  )
}

Social.propTypes = {
  icon: PropTypes.oneOf(['mail', 'twitter', 'facebook', 'instagram', 'youtube', 'github']).isRequired,
  link: PropTypes.string.isRequired
}

export default Social;
