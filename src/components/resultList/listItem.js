import React, { Component } from 'react'
import Paper from 'material-ui/Paper'
import IconButton from 'material-ui/IconButton'

import './listItem.css'
import MetaLabel from './metaLabel'
import AccountIcon from 'material-ui-community-icons/icons/account'
import ArchiveIcon from 'material-ui-community-icons/icons/archive'
import CalendarIcon from 'material-ui-community-icons/icons/calendar'
import EyeIcon from 'material-ui-community-icons/icons/eye'
import FlagIcon from 'material-ui-community-icons/icons/flag'
import LinkIcon from 'material-ui-community-icons/icons/link'
import MapIcon from 'material-ui-community-icons/icons/map'
import MapMarkerIcon from 'material-ui-community-icons/icons/map-marker'
import PlusIcon from 'material-ui-community-icons/icons/plus'
import TagIcon from 'material-ui-community-icons/icons/tag'

class ListItem extends Component {
  render() {
    const Item = this.props.content
    return (
      <li className="ListItem">
        <Paper className="ListRow FlexRow" zDepth={1}>
          <div className="RowLeft">
            <h1 className="ListItemTitle">
              <AccountIcon/>
              <a className="ItemTitle" href="#" >{Item.name}</a>
            </h1>
            <div className="ListItemMeta">
              <MetaLabel icon={<CalendarIcon color="#666"/>} label={Item.lastUpdated}/>
              <MetaLabel icon={<ArchiveIcon color="#666"/>}  label={Item.dataSources}/>
              <MetaLabel icon={<MapIcon color="#666"/>}      label={Item.locationCount}/>
              <MetaLabel icon={<FlagIcon color="#666"/>}     label={Item.countries}/>
              <MetaLabel icon={<TagIcon color="#666"/>}      label={Item.eoiTags}/>
            </div>
          </div>
          <div className="RowRight ActionButtonContainer">
            <ul className="ActionButtons">
              <li className="ActionButton"><IconButton><LinkIcon/></IconButton></li>
              <li className="ActionButton"><IconButton><MapMarkerIcon/></IconButton></li>
              <li className="ActionButton"><IconButton><PlusIcon color="green"/></IconButton></li>
              <li className="ActionButton"><IconButton><EyeIcon/></IconButton></li>
            </ul>
          </div>
        </Paper>
      </li>
    )
  }
}

export default ListItem
