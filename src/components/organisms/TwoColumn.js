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
        <div className="two-column__left">
          {this.props.left}
        </div>

        <div className="two-column__right">
          {this.props.right}
        </div>
      </div>
    )
  }
}
