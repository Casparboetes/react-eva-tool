import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Title from '../components/Title'
import StudentItem, { studentShape } from './StudentItem'
import { fetchStudents } from '../actions/students'
import './BatchesContainer.css'

class StudentContainer extends PureComponent {
  static propTypes = {
    students: PropTypes.arrayOf(studentShape).isRequired,
  }

  componentWillMount() {
    //this.props.dispatch(fetchBatches())
    this.props.fetch() // see mapDispatchToProps below
  }

  renderStudent = (student, index) => {
    return <BatchItem key={index} { ...student } />
  }

  render() {
    return (
      <div className="students wrapper">
        <header className="nav">
          <Title content="Class" />
        </header>

        <main>
          {this.props.students.map(this.renderStudent)}
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

export default connect(mapStateToProps, mapDispatchToProps)(StudentContainer)
