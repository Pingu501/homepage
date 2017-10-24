import React from 'react'

import Basic from './sections/Basic'

export default class Content extends React.PureComponent {
  render () {
    return (
      <div className="content">
        <Basic/>
      </div>
    )
  }
}
