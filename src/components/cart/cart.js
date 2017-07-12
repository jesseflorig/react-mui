import React, { Component } from 'react'
import Shelf from '../shelf/shelf'
import './cart.css'

class Cart extends Component {

  render() {
    const CartItems = this.props.cart.map((item, idx) =>{
      return <li key={idx}>{item}</li>
    })
    return(
      <div>
        <Shelf addItem={this.props.actions.addToCart} />
        <h2>Cart</h2>
        <ol>
          {CartItems}
        </ol>
      </div>
    )
  }
}

export default Cart
