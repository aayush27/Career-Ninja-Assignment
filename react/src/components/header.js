import React, { Component } from 'react';

import logo from '../Assets/logo-top.svg';

class Header extends Component {

  state = {
    activeButton: null,
  };

  activeClass = (event) => {
    console.log(this.props)
    this.setState({
      activeButton: event
    })
  }

  render = () => {
    return (
    <div className="container-fluid navbar-dark">  
      <div className="container">
        <nav className="navbar navbar-expand-sm">
          <div className="col-6 pl-0">
            <img src={logo} className="App-logoTop" />
          </div>
        </nav>
      </div>
    </div>  
    );
  }
}

export default Header;
