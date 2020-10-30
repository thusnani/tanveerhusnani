import React, { Component } from 'react';
import logo from './tanveer_husnani_logo.png';
import './App.css';

import NavBar from './NavBar';
import { BrowserRouter as Router} from 'react-router-dom';
import Home from './pages';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Router>
          <Home />
        </Router>
      </div>
    );
  }
}

export default App;
