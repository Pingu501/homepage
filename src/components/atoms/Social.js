import React from 'react';
import PropTypes from 'prop-types';

import facebook from '../../images/icons/Facebook.png'
import twitter from '../../images/icons/Twitter.png'
import github from '../../images/icons/GitHub.png'
import mail from '../../images/icons/Mail.png'

import Image from './Image'

const Social = props => {

  let image, link

  switch (props.type) {
    case 'facebook':
      image = facebook
      link = 'https://facebook.com/Hesse1Alexander'
      break;
    case 'twitter':
      image = twitter
      link = 'https://twitter.com/pinguin501'
      break;
    case 'github':
      image = github
      link = 'https://github.com/Pingu501'
      break;
    case 'mail':
      image = mail
      link = 'mailto:alex.hesse@icloud.com'
      break;
    default:
      image = github
      link = ''
  }

  return (
    <div className="social">
      <a href={link} target={props.type === 'mail' ? '' : '_blank'}>
        <Image image={image} alt={props.type}/>
      </a>
    </div>
  )
}

Social.propTypes = {
  type: PropTypes.oneOf(['mail', 'twitter', 'facebook', 'instagram', 'youtube', 'github']).isRequired,
}

export default Social;
