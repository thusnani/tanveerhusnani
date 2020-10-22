import React, { Component } from 'react';
import logo from '../tanveer_husnani_logo.png';
import './App.css';

import NavBar from './NavBar';

import Swiper from 'swiper';

class App extends Component {

  componentDidMount() {
    var swiper = new Swiper('.swiper-container', {
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      },
      pagination: {
        el: '.swiper-pagination',
      },
    });
  }

  render() {
    return (
      <div className="App">
        <NavBar />
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
      </div>


    );



  }
}

export default App;
