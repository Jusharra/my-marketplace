import React, { Component } from 'react';
//import Identicon from 'identicon.js';
//import logo from '../logo.png';
//import Swap from './Swap';
//import Main from './Main';



class Menu extends Component {

  render() {
    return (
      
      <nav className="navbar navbar-expand-lg navbar-inverse bg-inverse">
        <div className="container">
          <a className="navbar-brand" href="https://luxconnoisseurs.com/"><img src="assets/images/lux-logo.png" alt="" /></a>
                    <div className="collapse navbar-collapse" id="navbar-toggle-nav-center">
                        <ul className="navbar-nav m-auto">
                            {/* <li className="nav-item">
                                <a className="nav-link active" href="#x">ACTIVE</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#x">REGISTER</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#x">MORE</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#x">DROPDOWN</a>
                            </li> */}
                        </ul >
                        <ul className="navbar-nav px-3">
                            <li className="nav-item text-nowrap d-none d-sm-none d-sm-block">
                            <small className="text-white"><span id="account">{this.props.account}</span></small>
                            </li>
                          </ul>
                    </div>
                </div>
            </nav>

    );
  }
}

export default Menu;

/* <ul className="navbar-nav px-3">
  <li className="nav-item text-nowrap d-none d-sm-none d-sm-block">
    <small className="text-white"><span id="account">{this.props.account}</span></small>
      {this.props.account
      ? <img
      className="ml-2"
      width='30'
      heighht='30'
      src={`data:image/png;base64,${new Identicon(this.props.account, 30).toString()}`}
      alt=""
     />
    : <span></span>
    }
    </li>
    </ul> */