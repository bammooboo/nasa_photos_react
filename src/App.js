import React, { Component } from 'react';
import './App.css';
import LandingPage from './components/Landing/Landing';
import Navbar from './components/Navbar/Navbar';
import Gallery from './components/Gallery/Gallery';
import { BrowserRouter, Route } from 'react-router-dom';

class App extends Component {
  constructor() {
    super();
    this.state = {
      inputValue: 'hello'
    }
    this.updateSearchInput = this.updateSearchInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateSearchInput(event) {
    this.setState({ inputValue:event.target.value });
    event.preventDefault();
  }

  handleSubmit(event) {
    // console.log(this.state.inputValue);
  }

  render() {
    return(
      <BrowserRouter>
        <div>
          <Navbar onSubmit={this.handleSubmit} onChange={this.updateSearchInput}/>
          <Route path="/gallery" component={Gallery} />
          <Route path="/" exact component={LandingPage} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
