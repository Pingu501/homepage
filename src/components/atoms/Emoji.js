import React from 'react'
import PropTypes from 'prop-types'

const Emoji = props => {
  return <span role="img" aria-label="love">{props.emoji}</span>
}

Emoji.propTypes = {
  emoji: PropTypes.string.isRequired
}

export default Emoji
