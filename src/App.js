import React, { Component } from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import HomePage from './pages/HomePage';
import MyWorkPage from './pages/MyWorkPage';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Router>
          <HomePage />
          {/* <MyWorkPage workName='closet-app' /> */}
        </Router>
      </div>
    );
  }
}

export default App;
