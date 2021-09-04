/* eslint-disable react/jsx-no-undef */
import React from 'react'
import ReactDOM from 'react-dom'
import AppContainer from './containers/app.container'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'

import { BrowserRouter as Router } from 'react-router-dom'

ReactDOM.render(
  <Router>
    <AppContainer />
  </Router>,

  document.getElementById('root')
)
