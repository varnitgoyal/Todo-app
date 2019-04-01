import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
 
} from "react-router-dom";

import TodoManagerStyled from './Components/containers/TodoManager/TodoManager';
import LogIn from "./Components/Login/Login";
import LogOut from "./Components/LogOut/LogOut";
import HeaderStyled from "./Components/Header/Header";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'


library.add(fas)




class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuthenticated: false,
      username: "admin",
      password: "admin"
    };
  }

  handleSubmit = (event, item) => {
    event.preventDefault();
    const { username, password } = this.state;

    if (item.username === username && item.password === password) {
      this.setState({
        isAuthenticated: true
      });
    } else {
      this.setState({
        isAuthenticated: false
      });
    }
  };

  toggleAuthentication = () => {
    this.setState({
      isAuthenticated: !this.state.isAuthenticated
    });
  };

  render() {
    return (
      <Router>
      <HeaderStyled isAuthenticated={this.state.isAuthenticated} />

      <Route
        exact
        path="/"
        render={() => <p>home page content would be displayed here </p>}
      />

      <PrivateComponent
        path="/todos"
        isAuthenticated={this.state.isAuthenticated}
        component={TodoManagerStyled}
      />

    
      <Route
        path="/login"
        component={path => (
          <LogIn
            handleSubmit={this.handleSubmit}
            isRedirected={path}
            isAuthenticated={this.state.isAuthenticated}
          />
        )}
      />
      <Route
        path="/logout"
        component={() => (
          <LogOut
            toggleAuthentication={this.toggleAuthentication}
            isAuthenticated={this.state.isAuthenticated}
          />
        )}
      />
    </Router>
    );
  }

}

export default App;
const PrivateComponent = ({
  component: Component,
  isAuthenticated,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={props =>
        isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: isAuthenticated
            }}
          />
        )
      }
    />
  );
};