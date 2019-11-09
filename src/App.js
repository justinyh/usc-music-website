import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div id="content">
        <NavBar />
        <Content />
      </div>
    );
  }
}

function NavBar() {
  return (
    <div id="navbar">
      <nav id="menu">
        <div className="menu-logo">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <ul>
          <li className="menu-item">
            <span>Home</span>
          </li>
          <li className="menu-item">
            <span><a href="#">About</a></span>
          </li>
          <li className="menu-item">
            <span><a href="#">For USC Students</a></span>
          </li>
          <li className="menu-item">
            <span>For Parents</span>
          </li>
          <li className="menu-item">
            <span>Contact Us</span>
          </li>
        </ul>
      </nav>
      <hr></hr>
    </div>
  );
}

class Content extends React.Component {
  render() {
    return (
      <div className="content">
        <Title />
      </div>
    );
  }
}

function Title() {
  return (
    <div className="banner">
      <div className="image-box">
        <h1 id="title">Music Inspiring Community</h1>
      </div>
    </div>
  )
}


export default App;

