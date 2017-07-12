import React, { Component } from 'react'
import './shelf.css'

import RaisedButton from 'material-ui/RaisedButton'

class Shelf extends Component {
  constructor(props) {
    super(props);
    this.onAddItemToCart = this.onAddItemToCart.bind(this);
    this.state = {
      shelfItems: [
        'one',
        'two',
        'three',
      ]
    }
  }

  onAddItemToCart(item){
    this.props.addItem(item)
  }

  render() {
    const ShelfItems = this.state.shelfItems.map((item, idx) => {
      return (
        <li key={idx}>
          <RaisedButton label={item}
                        onClick={() => this.onAddItemToCart(item)}>
          </RaisedButton>
        </li>
      )
    });

    return(
      <div className='Shelf'>
        <h2>Shelf</h2>
        <ul>
          {ShelfItems}
        </ul>
      </div>
    )
  }
}

export default Shelf
