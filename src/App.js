import 'reset-css';
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      menuShowing: false
    }

  }

  toggleMenu() {
    this.setState({ menuShowing: !this.state.menuShowing });
  }

  

  render() {
    return (
      <div className="App">
        <div className='hero-container'>
          <div className='hero-header'>
            <div>
              <a className='logo'>Start Bootstrap</a>
              <ul className='horizontal-menu'>
                <li>SERVICES</li>
                <li>PORTFOLIO</li>
                <li>ABOUT</li>
                <li>TEAM</li>
                <li>CONTACT</li>
              </ul>
              <button className='site-menu-btn yellow-btn' onClick={ () => this.toggleMenu()}>MENU</button>
            </div>
          </div>
          
          <div className={this.state.menuShowing ? 'slide-menu-down' : 'slide-menu-up'}>
            <ul className={this.state.menuShowing ? 'vertical-menu vertical-menu-show' : 'vertical-menu vertical-menu-hide' }>
              <li>SERVICES</li>
              <li>PORTFOLIO</li>
              <li>ABOUT</li>
              <li>TEAM</li>
              <li>CONTACT</li>
            </ul>
          </div>
          <div className='hero-content'>
            <div>
              <div className='hero-greeting-text'>Welcome To Our Studio!</div>
              <div className='hero-compliment-text'>IT'S NICE TO MEET YOU</div>
              <button className='tell-more-btn yellow-btn bold-btn-txt'>TELL ME MORE</button>
            </div>
          </div>

        </div>
        <div className='testPanel'>
        </div>
      </div>
    );
  }
}

export default App;
