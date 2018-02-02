// src/routes.js
import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import BatchPage from './containers/BatchesContainer'
import StudentsPage from './containers/StudentContainer'
import StudentPage from './containers/StudentPage'

export default class Routes extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={BatchPage} />
        <Route path="/batches/:batchId" component={StudentsPage} />
        <Route path="/students/:studentId" component={StudentPage} />
      </div>
    )
  }
}
