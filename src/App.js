import React, { Component } from 'react'
import './App.css'
import SearchBar from 'material-ui-search-bar'
import FlatButton from 'material-ui/FlatButton'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import SplitView from './components/splitView/splitView'
import Navbar from './components/navbar/navbarContainer'
import SearchResults from './components/searchResults/searchResults'

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <AppBar
            iconElementLeft={
              <SearchBar onChange={()=> true}
                         onRequestSearch={()=> true}
              />
            }
            iconElementRight={<FlatButton label="Username"/>}
          />
        <SplitView leftContent={<Navbar/>} rightContent={<SearchResults/>}/>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App
