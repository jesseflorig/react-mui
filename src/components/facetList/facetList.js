import React, { Component } from 'react'

import './facetList.css'
import FacetBucket from './facetBucket'

class FacetList extends Component {
  constructor(props){
     super(props)

     this.state = {
       facetItems: [
         {
           name: 'Entity Type',
           items: [
             { name: 'Person'      , count: 50 },
             { name: 'Organization', count: 15 },
             { name: 'Location'    , count: 1  },
           ]
         },
         {
           name: 'Data Source',
           items: [
             { name: 'CCR'   , count: 12 },
             { name: 'DNB'   , count: 32 },
             { name: 'OFACC' , count: 7  },
           ]
         },
         {
           name: 'Countries',
           items: [
             { name: 'US' , count: 43 },
             { name: 'RU' , count: 5  },
             { name: 'CN' , count: 1  },
           ]
         },
       ]
     }
  }

  render() {
    const Buckets = this.state.facetItems.map((bucket, idx)=>{
      return (
        <FacetBucket key={idx} title={bucket.name} items={bucket.items} />
      )
    })

    return(
      <div className="FacetListContainer">
        <ul className="FacetList">
          {Buckets}
        </ul>
      </div>
    )
  }
}

export default FacetList
