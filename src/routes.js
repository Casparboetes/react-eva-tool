// src/routes.js
import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import BatchesContainer from './containers/BatchesContainer'
import ClassPage from './containers/ClassContainer'
// import ClassPage from './containers/ClassPage'
import StudentPage from './containers/StudentPage'

export default class Routes extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={BatchesContainer} />
        <Route path="/batches/:batchId" component={ClassPage} />
        <Route path="/batches/:batchId/students/" component={StudentPage} />
      </div>
    )
  }
}

      // <Route path="/batches/:batchId/" component={BatchPage} />
    // <Route path="/batches/:batchId" component={ClassPage} />
