// src/routes.js
import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import BatchPage from './containers/BatchesContainer'
import StudentsList from './containers/StudentsList'
import StudentPage from './containers/StudentPage'

export default class Routes extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={BatchPage} />
        <Route path="/students/batch/:batchId" component={StudentsList} />
        <Route path="/students/:studentId" component={StudentPage} />
      </div>
    )
  }
}
