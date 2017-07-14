import React, { Component } from 'react'

import './metaLabel.css'

class MetaLabel extends Component {
  constructor(props) {
    super(props)

    this.state = {
      labelText: props.label.constructor === Array ? props.label.join(', ') : props.label
    }

  }

  render() {
    return (
      <div className="MetaLabelContainer">
        <div className="MetaLabel">
          <div className="LabelIcon">{this.props.icon}</div>
          <div className="LabelText">{this.state.labelText}</div>
        </div>
      </div>
    )
  }
}

export default MetaLabel
