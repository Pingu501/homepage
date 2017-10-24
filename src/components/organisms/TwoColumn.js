import React from 'react'
import PropTyes from 'prop-types'

export default class TwoColumn extends React.PureComponent {
  static propTypes = {
    left: PropTyes.any,
    right: PropTyes.any
  }

  render() {
    return (
      <div className="two-column">
        <div>
          {this.props.left}
        </div>

        <div>
          {this.props.right}
        </div>
      </div>
    )
  }
}