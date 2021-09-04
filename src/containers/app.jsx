import React from 'react'
import { Route } from 'react-router-dom'
import Home from '../components/Home/Home '
import SignUp from '../components/SignUp/SignUp'
import Login from '../components/Login/Login'
import UpdateProfile from '../components/UpdateProfile/UpdateProfile'
import MemberDirectory from '../components/MemberDirectory/MemberDirectory'
import EventsCalender from '../components/EventsCalender/EventsCalender'
import CareerOppurtunities from '../components/CareerOppurtunities/CareerOppurtunities'
import AlumniStories from '../components/AlumniStories/AlumniStories'
import FundRaising from '../components/FundRaising/FundRaising'
import NewsAndPhotos from '../components/NewsAndPhotos/NewsAndPhotos'
import StoryDetails from '../components/AlumniStories/StoryDetails'
import Programs from '../components/Programs/Program'
import DonationMethodes from '../components/FundRaising/DonationMethodes'
import CurrentPartners from '../components/FundRaising/CurrentPartners'

const app = () => {
  return (
    <>
      <Route exact path='/' component={Home} />
      <Route exact path='/home' component={Home} />
      <Route exact path='/signup' component={SignUp} />
      <Route exact path='/login' component={Login} />
      <Route exact path='/updateprofile' component={UpdateProfile} />
      <Route exact path='/MemberDirectory' component={MemberDirectory} />
      <Route exact path='/events' component={EventsCalender} />
      <Route exact path='/career' component={CareerOppurtunities} />
      <Route exact path='/stories/:id' component={StoryDetails} />
      <Route exact path='/stories' component={AlumniStories} />
      <Route exact path='/fundraising' component={FundRaising} />
      <Route exact path='/NewsAndPhotos' component={NewsAndPhotos} />
      <Route exact path='/Programs' component={Programs} />
      <Route exact path='/DonationMethodes' component={DonationMethodes} />
      <Route exact path='/CurrentPartners' component={CurrentPartners} />

      <Route path='*' component={() => <h1>Not Found</h1>} />
    </>
  )
}

export default app
