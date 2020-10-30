import React from 'react'
import Amplify, { Auth } from 'aws-amplify'
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from 'react-router-dom'

import FormPage from '../components/FormPage/FormPage'
import HomePage from '../components/HomePage/HomePage'

import './App.scss'

class App extends React.Component {
  render () {
    return (
      <>
        <Router>
          <Switch>
            <Route path='/' exact component={HomePage} />
            <Route path='/form' component={FormPage} />
          </Switch>
        </Router>
      </>
    )
  }
}

export default App
