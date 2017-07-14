import React, { Component } from 'react'
import IconButton from 'material-ui/IconButton'

import './navbar.css';
import ChartPieIcon from 'material-ui-community-icons/icons/chart-pie/'
import InboxIcon from 'material-ui-community-icons/icons/inbox'
import LinkIcon from 'material-ui-community-icons/icons/link'
import MagnifyIcon from 'material-ui-community-icons/icons/magnify'

class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      navbarItems: [
        'one',
        'two',
        'three',
      ]
    }
  }

  render() {
    return(
      <div>
        <ul className="LeftNav">
          <li><IconButton><MagnifyIcon/></IconButton></li>
          <li><IconButton><ChartPieIcon/></IconButton></li>
          <li><IconButton><InboxIcon/></IconButton></li>
          <li><IconButton><LinkIcon/></IconButton></li>
        </ul>
      </div>
    )
  }
}

export default Navbar
