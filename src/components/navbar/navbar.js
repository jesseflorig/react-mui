import React, { Component } from 'react'
import IconButton from 'material-ui/IconButton'

import './navbar.css';
import ClippyIcon from 'material-ui-community-icons/icons/clippy'
import CoffeeIcon from 'material-ui-community-icons/icons/coffee'
import ChartPieIcon from 'material-ui-community-icons/icons/chart-pie/'

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
    const NavbarItems = this.state.navbarItems.map((item, idx) => {
      return (
        <li key={idx}>
          {item}
        </li>
      )
    });

    return(
      <div>
        <ul className="LeftNav">
          <li><IconButton><CoffeeIcon/></IconButton></li>
          <li><IconButton><ChartPieIcon/></IconButton></li>
          <li><IconButton><ClippyIcon/></IconButton></li>
          <li><IconButton><ClippyIcon/></IconButton></li>
        </ul>
      </div>
    )
  }
}

export default Navbar
