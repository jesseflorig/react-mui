import React, { Component } from 'react'

import './bucketItem.css'
import Checkbox from 'material-ui/Checkbox'

class BucketItem extends Component {
  render(){
    return (
      <li><Checkbox label={<span>{this.props.item.name} ({this.props.item.count})</span>}/></li>
    )
  }
}

export default BucketItem
