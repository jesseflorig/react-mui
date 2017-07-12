import React, { Component } from 'react'

import './resultList.css'

class ResultList extends Component {
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
        Result List
      </div>
    )
  }
}

export default ResultList
