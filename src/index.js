import React from 'react'
import ReactDOM from 'react-dom'
import AppContainer from './containers/app.container'
import { BrowserRouter as Router } from 'react-router-dom'
import './index.less'

ReactDOM.render(
  <Router>
    <AppContainer />
  </Router>,
  document.getElementById('root')
)
