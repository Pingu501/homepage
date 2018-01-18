import React from 'react'
import PropTypes from 'prop-types'

const MenuEntry = props => {
  const anchorName = props.name.toLowerCase()
  const anchor = '/#' + anchorName

  const handleMenuClick = event => {
    event.preventDefault()
    document.getElementById(anchorName).scrollIntoView({behavior: 'smooth', block: 'start'})
  }

  return (
    <div className="menu-entry">
      <a href={anchor} onClick={handleMenuClick}>
        {props.name}
      </a>
    </div>
  )
}

MenuEntry.propTypes = {
  name: PropTypes.string.isRequired
}

export default MenuEntry
