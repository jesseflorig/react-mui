import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import IconButton from 'material-ui/IconButton';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import ClippyIcon from 'material-ui-community-icons/icons/clippy';
import Cart from './components/cart/cartContainer';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <AppBar
            title="React App with Material UI"
            iconElementRight={<IconButton><ClippyIcon /></IconButton>}
          />
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to React</h2>
          </div>
          <div className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </div>
          <RaisedButton label="Default" />
          <Cart/>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
