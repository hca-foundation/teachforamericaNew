import React from 'react';

import FormPage from '../components/FormPage/FormPage';
import Nav from '../components/Nav/Nav';

import './App.scss';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <FormPage />
      </div>
    );
  }
}

export default App;
