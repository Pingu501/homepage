import React from 'react'
import PropTypes from 'prop-types'

const MenuEntry = props => {
  const anchorName = props.name.toLowerCase()
  const anchor = '/#' + anchorName

  const handleMenuClick = event => {
    event.preventDefault()
    event.stopPropagation()

    let rect = document.getElementById(anchorName).getBoundingClientRect()

    let counter = 0
    let repeat = 30

    const scrollInterval = setInterval(function () {
      if (counter < repeat) {
        window.scrollTo(0, window.scrollY + (rect.top / repeat))

        counter++
      } else {
        window.location.href = '/#' + anchorName
        clearInterval(scrollInterval)
      }
    }, 10)
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
