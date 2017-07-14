import React, { Component } from 'react'

import './resultList.css'
import ListItem from './listItem'

class ResultList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      navbarItems: [
        { name: 'Chet Americanman', dataSources: ['CCR', 'DNB'], locationCount: 0, countries: ['US', 'RU'], type: 'person', lastUpdated:"1/1/2017" , eoiTags: ['Russia'] },
        { name: 'Joseph Block'    , dataSources: ['DNB']       , locationCount: 1, countries: ['US'], type: 'person', lastUpdated:"4/20/2017"      , eoiTags: []         },
        { name: 'Chet Americanman', dataSources: ['CCR', 'DNB'], locationCount: 0, countries: ['US', 'RU'], type: 'person', lastUpdated:"1/1/2017" , eoiTags: ['Russia'] },
        { name: 'Joseph Block'    , dataSources: ['DNB']       , locationCount: 1, countries: ['US'], type: 'person', lastUpdated:"4/20/2017"      , eoiTags: []         },
        { name: 'Chet Americanman', dataSources: ['CCR', 'DNB'], locationCount: 0, countries: ['US', 'RU'], type: 'person', lastUpdated:"1/1/2017" , eoiTags: ['Russia'] },
        { name: 'Joseph Block'    , dataSources: ['DNB']       , locationCount: 1, countries: ['US'], type: 'person', lastUpdated:"4/20/2017"      , eoiTags: []         },
        { name: 'Chet Americanman', dataSources: ['CCR', 'DNB'], locationCount: 0, countries: ['US', 'RU'], type: 'person', lastUpdated:"1/1/2017" , eoiTags: ['Russia'] },
        { name: 'Joseph Block'    , dataSources: ['DNB']       , locationCount: 1, countries: ['US'], type: 'person', lastUpdated:"4/20/2017"      , eoiTags: []         },
        { name: 'Chet Americanman', dataSources: ['CCR', 'DNB'], locationCount: 0, countries: ['US', 'RU'], type: 'person', lastUpdated:"1/1/2017" , eoiTags: ['Russia'] },
        { name: 'Joseph Block'    , dataSources: ['DNB']       , locationCount: 1, countries: ['US'], type: 'person', lastUpdated:"4/20/2017"      , eoiTags: []         },
      ]
    }
  }

  render() {
    const ListItems = this.state.navbarItems.map((item, idx) => {
      return (
        <ListItem key={idx} content={item}></ListItem>
      )
    });

    return(
      <ul className="ResultList">
        {ListItems}
      </ul>
    )
  }
}

export default ResultList
