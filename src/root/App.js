import React from 'react';
import './App.scss';
import 'bootstrap';

import logo from '../assets/img-qna.jpeg';

import Header from './components/Header';
import Questions from './components/Questions';
import Footer from './components/Footer';

/**
 * Root component of the application
 */
function AppRoot() {
  return (
    <div className="App">
      <img src={logo} className="logo" alt="logo" />
      <div className='appWrapper'>
        <Header />
        <Questions />
      </div>
      <Footer />
    </div>
  )
}

export default AppRoot;
