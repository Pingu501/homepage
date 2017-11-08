import React from 'react'

import MenuEntry from '../components/atoms/MenuEntry'

export default class Header extends React.PureComponent {

  constructor(props) {
    super(props)

    this.state = {
      scrolled: false
    }
  }

  render() {
    return (
      <header>
        <nav>
          <MenuEntry name="Basic"/>
          <MenuEntry name="Stations"/>
          <MenuEntry name="Skills"/>
          <MenuEntry name="References"/>
          <MenuEntry name="Hobbies"/>
        </nav>
      </header>
    )
  }

  componentDidMount() {
    const header = document.getElementsByTagName('header')[0];
    window.addEventListener('scroll', function () {
      if (document.documentElement.scrollTop > 200) {
        header.setAttribute('class', 'scrolled')
      } else {
        header.removeAttribute('class')
      }
    })
  }
}
