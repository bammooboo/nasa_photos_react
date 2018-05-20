import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Landing.css';

class LandingPage extends Component {
  render() {
    return(
      <div className="landing container">
        <Link to="/gallery" className="galleryLink">
          <h1>Enter</h1>
          <h1>Gallery</h1>
        </Link>
      </div>
    );
  }
}

export default LandingPage;
