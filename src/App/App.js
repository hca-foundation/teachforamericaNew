import React from 'react';

import GlobalStateProvider from '../state/globalStore';
import FormPage from '../components/FormPage/FormPage';
import Nav from '../components/Nav/Nav';

import './App.scss';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <GlobalStateProvider>
          <Nav />
          <FormPage />
        </GlobalStateProvider>
      </div>
    );
  }
}

export default App;
