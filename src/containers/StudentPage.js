// src/batches/BatchItem.js
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import EvaluationCategory from './EvaluationCategory'
import Paper from 'material-ui/Paper'
import './StudentPage.css'

const PLACEHOLDER = 'http://via.placeholder.com/500x180?text=No%20Image'

export const studentPageShape = PropTypes.shape({
    studentName: PropTypes.string.isRequired,
    batchNum: PropTypes.string.isRequired,
    photo: PropTypes.string,
    green: PropTypes.bool,
    yellow: PropTypes.bool,
    red: PropTypes.bool,
    remark: PropTypes.string,
    evaluationDate: PropTypes.string.isRequired,
})

class StudentPage extends PureComponent {
  static propTypes = {
    ...studentPageShape.isRequired,
    toggleLikeBatch: PropTypes.func.isRequired
  }

  render() {
    const { batchNum, studentName, photo, green, yellow, red, evaluationDate } = this.props
    const categories = { yellow, red, green }

    return(
      <article className="StudentPage">
          <header>
            <div
              className="cover"
              style={{ backgroundImage: `url(${photo || PLACEHOLDER })` }} />
          </header>
            <div>
              <h1>
                {studentName}
              </h1>
              <ul className="categories">
                <EvaluationCategory { ...categories } />
              </ul>
                <p>Evalution on: { evaluationDate }</p>
            </div>
          <footer>

          </footer>
      </article>
    )
  }
}

const mapDispatchToProps = {

}

export default connect(null, mapDispatchToProps)(StudentPage)
