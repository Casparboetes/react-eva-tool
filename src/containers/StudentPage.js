// src/batches/BatchItem.js
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
// import { Link } from 'react-router-dom'
import EvaluationCategory from './EvaluationCategory'
import './StudentPage.css'

const PLACEHOLDER = 'http://via.placeholder.com/500x180?text=No%20Image'

export const batchShape = PropTypes.shape({
    _id: PropTypes.string,
    studentName: PropTypes.string.isRequired,
    photo: PropTypes.string,
    yellow: PropTypes.bool,
    red: PropTypes.bool,
    remark: PropTypes.string,
    green: PropTypes.bool,
    startDate: PropTypes.string.isRequired,
})

class BatchItem extends PureComponent {
  static propTypes = {
    ...batchShape.isRequired,
    toggleLikeBatch: PropTypes.func.isRequired
  }

  render() {
    const { _id, studentName, remark, startDate, yellow, red, green, photo } = this.props
    const categories = { yellow, red, green }

    return(
      <article className="BatchItem">
        <header>
          <div
            className="cover"
            style={{ backgroundImage: `url(${photo || PLACEHOLDER })` }} />
              <h1>
                {studentName}
              </h1>
                <ul className="categories">
                  <EvaluationCategory { ...categories } />
                </ul>
        </header>
          <div>
            <p>Started on: { startDate }</p>
          </div>
        <footer>
          
        </footer>
      </article>
    )
  }
}

const mapDispatchToProps = {

}

export default connect(null, mapDispatchToProps)(BatchItem)
