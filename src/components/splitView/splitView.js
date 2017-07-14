import React, { Component } from 'react'

import './splitView.css'

class SplitView extends Component {
  render() {
    return(
      <div className="SplitView">
        <div className="SplitChild LeftSplit">{this.props.leftContent}</div>
        <div className="SplitChild RightSplit">{this.props.rightContent}</div>
      </div>
    )
  }
}

export default SplitView
