import React from 'react'

import Basic from './sections/Basic'
import Stations from './sections/Stations'

export default class Content extends React.PureComponent {
  render () {
    return (
      <div className="content">
        <Basic/>
        <Stations/>
      </div>
    )
  }
}
