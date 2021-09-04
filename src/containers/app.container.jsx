import React from 'react'
import App from './app'
import { Provider } from 'react-redux'
import { store } from '../redux/store'
import NavigationBar from '../components/Shared/NavigationBar/NavigationBar'
import { Switch } from 'react-router-dom'

const AppContainer = () => {
  return (
    <Provider store={store}>
      <NavigationBar />
      <Switch>
        <App />
      </Switch>
    </Provider>
  )
}

export default AppContainer
