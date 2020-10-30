import React from 'react'
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from 'react-router-dom'

import GlobalStateProvider from '../state/globalStore';
import FormPage from '../components/FormPage/FormPage';
import Nav from '../components/Nav/Nav';
import HomePage from '../components/HomePage/HomePage'

import './App.scss'

class App extends React.Component {
  render () {
    return (
        <>
          <GlobalStateProvider>
            <Router>
              <Nav />
              <Switch>
                <Route path='/' exact component={HomePage} />
                <Route path='/form' component={FormPage} />
              </Switch>
            </Router>
          </GlobalStateProvider>
        </>
    );
  }
}


export default App;
