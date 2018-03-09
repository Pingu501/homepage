import React from 'react'
import ReactDOM from 'react-dom'

import registerServiceWorker from './registerServiceWorker'

import Header from './container/Header'
import Content from './container/Content'
import Footer from './container/Footer'

import './main.css'

ReactDOM.render(
  <div className="application">
    <Header/>
    <Content/>
    <Footer/>
  </div>
  , document.getElementById('root')
)
registerServiceWorker()
