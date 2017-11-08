import React from 'react'
import PropTypes from 'prop-types'
import FontAwesome from 'react-fontawesome'
import Link from '../atoms/Link'

const Icon = props => {

  const icon = <FontAwesome name={props.name}/>

  if (props.link) {
    return (
      <Link destination={props.link} text={icon} mail={props.sameWindow}/>
    )
  } else {
    return (
      <div>
        {icon}
      </div>
    )
  }
}

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  link: PropTypes.string,
  sameWindow: PropTypes.bool
}

export default Icon
