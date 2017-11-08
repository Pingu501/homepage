import React from 'react'
import PropTypes from 'prop-types'

const MenuEntry = props => {
  return (
    <div className="menu-entry">
      {props.name}
    </div>
  )
}

MenuEntry.propTypes = {
  name: PropTypes.string.isRequired
}

export default MenuEntry