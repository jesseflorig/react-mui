import React, { Component } from 'react'

import './searchResults.css'
import SplitView from '../splitView/splitView'
import RaisedButton from 'material-ui/RaisedButton';
import Popover, {PopoverAnimationVertical} from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import FacetList from '../facetList/facetList'
import ResultList from '../resultList/resultList'
import ExportIcon from 'material-ui-community-icons/icons/export'
import SortAscIcon from 'material-ui-community-icons/icons/sort-ascending'
import SortAlphaIcon from 'material-ui-community-icons/icons/sort-alphabetical'

class SearchResults extends Component {

  render() {
    return(
      <div>
        <div className="HeadingContainer">
          <h2 className="Heading">Search Results</h2>
          <ul className="HeadingActions">
            <li className="HeadingAction"><RaisedButton icon={<ExportIcon/>} label='Export'/></li>
            <li className="HeadingAction"><RaisedButton icon={<SortAscIcon/>} label='Name'/></li>
          </ul>
        </div>
        <div className="Subheading">Showing 50 of 200,000 search results</div>
        <SplitView leftContent={<FacetList/>} rightContent={<ResultList/>}/>
      </div>
    )
  }
}

export default SearchResults
