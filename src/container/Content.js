import React from 'react'

import Basic from './sections/Basic'
import Stations from './sections/Stations'
import Skills from './sections/Skills'

export default class Content extends React.PureComponent {
  render () {
    return (
      <div className="content">
        <Basic/>
        <Stations/>
        <Skills/>
      </div>
    )
  }
}
