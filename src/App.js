import React, { Component } from 'react'
import './App.css'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import IconButton from 'material-ui/IconButton'
import AppBar from 'material-ui/AppBar'
import ClippyIcon from 'material-ui-community-icons/icons/clippy'
import Navbar from './components/navbar/navbarContainer'
import ResultList from './components/resultList/resultList'

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <AppBar
            title="React App with Material UI"
            iconElementRight={<IconButton><ClippyIcon /></IconButton>}
          />
          <div className="SplitView">
            <div className="SplitChild LeftSplit">
              <Navbar/>
            </div>
            <div className="SplitChild RightSplit">
              <ResultList/>
            </div>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App
