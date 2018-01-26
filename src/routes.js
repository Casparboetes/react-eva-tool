// src/routes.js
import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import BatchesContainer from './batches/BatchesContainer'
import StudentPage from './batches/StudentPage'

export default class Routes extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={BatchesContainer} />
        <Route path="/batches/:batchId" component={StudentPage} />
      </div>
    )
  }
}