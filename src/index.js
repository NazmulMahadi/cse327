/* eslint-disable react/jsx-no-undef */
import React from 'react'
import ReactDOM from 'react-dom'
import AppContainer from './containers/app.container'
import './index.less'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/Home/Home '
import NavigationBar from './components/Shared/NavigationBar/NavigationBar'
import SignUp from './components/SignUp/SignUp'
import Login from './components/Login/Login'
import UpdateProfile from './components/UpdateProfile/UpdateProfile'
import MemberDirectory from './components/MemberDirectory/MemberDirectory'
import EventsCalender from './components/EventsCalender/EventsCalender'
import CareerOppurtunities from './components/CareerOppurtunities/CareerOppurtunities'
import AlumniStories from './components/AlumniStories/AlumniStories'
import FundRaising from './components/FundRaising/FundRaising'
import NewsAndPhotos from './components/NewsAndPhotos/NewsAndPhotos'

ReactDOM.render(
  <>
    <NavigationBar />
    <Router>
      <AppContainer />

      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>

        <Route path='/home'>
          <Home />
        </Route>

        <Route path='/signup'>
          <SignUp />
        </Route>

        <Route path='/login'>
          <Login />
        </Route>
        <Route path='/updateprofile'>
          <UpdateProfile />
        </Route>
        <Route path='/MemberDirectory'>
          <MemberDirectory />
        </Route>
        <Route path='/events'>
          <EventsCalender />
        </Route>
        <Route path='/career'>
          <CareerOppurtunities />
        </Route>
        <Route path='/stories'>
          <AlumniStories />
        </Route>
        <Route path='/fundraising'>
          <FundRaising />
        </Route>
        <Route path='/NewsAndPhotos'>
          <NewsAndPhotos />
        </Route>

        <Route path='*'>nai</Route>
      </Switch>
    </Router>
  </>,
  document.getElementById('root')
)
