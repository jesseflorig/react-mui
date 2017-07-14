import React, { Component } from 'react'

import './facetBucket.css'
import BucketItem from './bucketItem'

class FacetBucket extends Component {
  render() {
    const BucketItems = this.props.items.map((item, idx)=>{
      return (
        <BucketItem key={idx} item={item}/>
      )
    })
    return (
      <li className="FacetListItem">
        <h3 className="Title">{this.props.title}</h3>
        <ul className="BucketItems">
          {BucketItems}
        </ul>
      </li>
    )
  }
}

export default FacetBucket
