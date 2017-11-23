import React from 'react'
import {Link} from 'react-router-dom'

export default class Footer extends React.PureComponent {
  render () {
    return (

      <footer>
        <div className="footer__wrapper">
          &#169; Alexander Hesse, 2017 <br/>
          <Link to="/legal">Legal Disclosure</Link>
        </div>
      </footer>
    )
  }
}
