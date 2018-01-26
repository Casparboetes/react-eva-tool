// src/batches/BatchesContainer.js
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Title from '../components/Title'
import BatchItem, { batchShape } from './BatchItem'
import { fetchStudents } from '../actions/students'
import './BatchesContainer.css'

class BatchesContainer extends PureComponent {
  static propTypes = {
    batches: PropTypes.arrayOf(batchShape).isRequired,
  }

  componentWillMount() {
    //this.props.dispatch(fetchBatches())
    this.props.fetch() // see mapDispatchToProps below
  }

  renderBatch = (batch, index) => {
    return <BatchItem key={index} { ...batch } />
  }

  render() {
    return (
      <div className="batches wrapper">
        <header className="nav">
          <Title content="Class" />
        </header>

        <main>
          {this.props.students.map(this.renderStudents)}
        </main>
      </div>
    )
  }
}

const mapStateToProps = ({ students }) => ({ students })
const mapDispatchToProps = { fetch: fetchStudents }

// Same as:
// const mapStoreToProps = (store) => {
//   return { batches: store.batches }
// }

export default connect(mapStateToProps, mapDispatchToProps)(BatchesContainer)
