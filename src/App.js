import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import PersonIcon from 'material-ui/svg-icons/social/person';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import ClippyIcon from 'material-ui-community-icons/icons/clippy';

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
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
          <RaisedButton label="Default" />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
