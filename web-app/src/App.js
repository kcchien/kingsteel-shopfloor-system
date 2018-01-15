import React, { Component } from 'react';
import { Navbar, Button } from 'react-bootstrap';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  
  goTo(route) {
    this.props.history.replace(`/${route}`)
  }

  login() {
    this.props.auth.login();
  }

  logout() {
    this.props.auth.logout();
  }

  render() {
    // 從props.auth裡取出isAuthenticated
    const { isAuthenticated } = this.props.auth;

    return (
      <div>
        <Navbar fluid>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">Auth0 - React</a>
            </Navbar.Brand>
            <Button
              id="qsHomeBtn"
              bsStyle="primary"
              className="btn-margin"
              onClick={this.goTo.bind(this, 'home')}
            >
              {/*Default Button for Home Route*/}
              Home
            </Button>
            {
              /*
              Show Login Button if user not authenticated
              */
              !isAuthenticated() && (
                <Button
                  id="qsLoginBtn"
                  bsStyle="primary"
                  className="btn-margin"
                  onClick={this.login.bind(this)}
                >
                  登入
                </Button>
              )
            }
            {
              /*
              Show User Profile Button when authenticated
              */ 
              isAuthenticated() && (
                <Button
                  id="qsProfileBtn"
                  bsStyle="primary"
                  className="btn-margin"
                  onClick={this.goTo.bind(this, 'profile')}
                >
                我的資訊
                </Button>
              )
            }
            {
              /*
              Show Logout Button when user anthenticated
              */
              isAuthenticated() && (
                <Button
                  id="qsLogoutBtn"
                  bsStyle="primary"
                  className="btn-margin"
                  onClick={this.logout.bind(this)}
                >
                  登出
                </Button>
              )
            }
          </Navbar.Header>
        </Navbar>
      </div>
    );
  }
}

export default App;
