import React, { Component } from 'react';
import './Navbar.css';
import logo from '../../assets/nasa-logo.png';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  render() {
    return(
      <div>
        <nav className="navigation">
          <div className="logo">
            <Link to="/"><img src={logo} alt="NASA Logo"/></Link>
            <p>NASA Image Gallery</p>
          </div>
          <div className="searchBox">
            <form className="searchContainer">
              <input
                type="text"
                ref="query"
                onChange={this.props.onChange}
                value={this.props.inputValue}
                placeholder="Search" />
              <Link to="/gallery">
                <button onClick={this.props.onSubmit}>
                  <i className="fas fa-search"></i>
                </button>
              </Link>
            </form>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
