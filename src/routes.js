// src/routes.js
import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import BatchesContainer from './batches/BatchesContainer'
import BatchItem from './batches/BatchItem'

export default class Routes extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={BatchesContainer} />
        <Route path="/batches/:batchId" component={BatchItem} />
      </div>
    )
  }
}
