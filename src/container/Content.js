import React from 'react'

import Basic from './sections/Basic'
import Stations from './sections/Stations'
import Skills from './sections/Skills'
import Hobbies from './sections/Hobbies'

export default class Content extends React.PureComponent {
  render () {
    return (
      <div className="content">
        <Basic/>
        <Stations/>
        <Skills/>
        <Hobbies/>
      </div>
    )
  }
}
