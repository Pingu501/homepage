import React from 'react'
import ReactDOM from 'react-dom'

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import registerServiceWorker from './registerServiceWorker'

import Legal from './container/Legal'

import Header from './container/Header'
import Content from './container/Content'
import Footer from './container/Footer'

import './main.css'


ReactDOM.render(
  <Router>
    <div className="application">
      <Header/>
      <Route path="/" exact component={Content}/>
      <Route path="/legal" component={Legal}/>
      <Footer/>
    </div>
  </Router>
, document.getElementById('root')
)
registerServiceWorker()
