import React from 'react'
import PropTypes from 'prop-types'

const MenuEntry = props => {
  const anker = '#' + props.name.toLowerCase()

  return (
    <div className="menu-entry">
      <a href={anker}>
        {props.name}
      </a>
    </div>
  )
}

MenuEntry.propTypes = {
  name: PropTypes.string.isRequired
}

export default MenuEntry
