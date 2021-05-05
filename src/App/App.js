import React, { useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import GlobalStateProvider from '../state/globalStore'
import FormPage from '../components/FormPage/FormPage'
import Nav from '../components/Nav/Nav'
import HomePage from '../components/HomePage/HomePage'
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'
import './App.scss'
// import Amplify from 'aws-amplify'
import { API, Auth } from 'aws-amplify'
// import awsExports from '../aws-exports'
// Amplify.configure(awsExports)

const App = () => {
  useEffect(async () => {}, [])
  return (
    <>
      <GlobalStateProvider>
        <Router>
          <Nav />
          <Switch>
            <Route path='/' exact component={HomePage} />
            {/* <Route path='/form' component={FormPage} /> */}
          </Switch>
        </Router>
      </GlobalStateProvider>
    </>
  )
}

export default withAuthenticator(App)
