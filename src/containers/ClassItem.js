// src/students/studentItem.js
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import BatchCategory from './BatchCategory'
import './BatchItem.css'

export const batchShape = PropTypes.shape({
    _id: PropTypes.string.isRequired,
    batchNum: PropTypes.number.isRequired,
    yellow: PropTypes.bool,
    red: PropTypes.bool,
    green: PropTypes.bool,
    startDate: PropTypes.string.isRequired,
    endDate: PropTypes.string.isRequired,
})

class BatchItem extends PureComponent {
  static propTypes = {
    ...batchShape.isRequired,
  }

  render() {
    const { _id, batchNum ,endDate, startDate, yellow, red, green } = this.props
    const categories = { yellow, red, green }

    return(
      <article className="BatchItem">
        <header>
          <h1>
            <Link to={`/batches/${_id}`}>
              {batchNum}
            </Link>
          </h1>

          <ul className="categories">
            <BatchCategory { ...categories } />
          </ul>
        </header>
        <div>
          <p>Batch starts on: { startDate }</p>
          <p>Batch ends on: { endDate }</p>
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
