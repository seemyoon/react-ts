import React, {Component} from 'react';
import './App.css';
import {UsersComponent} from "./services/users-component/UsersComponent";

class App extends Component {
  render() {
    return (
    <UsersComponent />
  );
  }
}

export default App;