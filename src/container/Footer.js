import React from 'react'
import Legal from './Legal'

export default class Footer extends React.PureComponent {
  
  render () {
    return (

      <footer>
        <div className="footer__wrapper">
          &#169; Alexander Hesse, 2017 <br/>
          <Legal/>
        </div>
      </footer>
    )
  }
}
