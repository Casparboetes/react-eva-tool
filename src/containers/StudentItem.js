// src/students/studentItem.js
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import EvaluationCategory from './EvaluationCategory'
import './BatchItem.css'

export const studentShape = PropTypes.shape({
    _id: PropTypes.string.isRequired,
    studentName: PropTypes.string.isRequired,
    photo: PropTypes.string,
    yellow: PropTypes.bool,
    red: PropTypes.bool,
    green: PropTypes.bool,
})

class StudentItem extends PureComponent {
  static propTypes = {
    ...studentShape.isRequired,
  }

  render() {
    const { _id, studentName ,photo, yellow, red, green } = this.props
    const categories = { yellow, red, green }

    return(
      <article className="StudentItem">
        <header>
        <div
          className="cover"
          style={{ backgroundImage: `url(${ photo })` }} />
          <h1>
            <Link to={`/batches/${ _id }/students/${ _id }`}>
              {studentName}
            </Link>
          </h1>

          <ul className="categories">
            <EvaluationCategory { ...categories } />
          </ul>
        </header>

        <footer>

        </footer>
      </article>
    )
  }
}

const mapDispatchToProps = {
}

export default connect(null, mapDispatchToProps)(StudentItem)
