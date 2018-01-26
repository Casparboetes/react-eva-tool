// src/batches/BatchItem.js
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import BatchCategory from './BatchCategory'
import LikeButton from '../components/LikeButton'
import { toggleLikeBatch } from '../actions/batches'
import './BatchItem.css'

// const PLACEHOLDER = 'http://via.placeholder.com/500x180?text=No%20Image'
// style={{ backgroundImage: `url(${photo || PLACEHOLDER })` }} />


export const batchShape = PropTypes.shape({
    _id: PropTypes.string.isRequired,
    batchName: PropTypes.string.isRequired,
    photo: PropTypes.string,
    yellow: PropTypes.bool,
    red: PropTypes.bool,
    green: PropTypes.bool,
    startDate: PropTypes.string.isRequired,
    endDate: PropTypes.string.isRequired,
    liked: PropTypes.bool
})

class BatchItem extends PureComponent {
  static propTypes = {
    ...batchShape.isRequired,
    toggleLikeBatch: PropTypes.func.isRequired
  }

  toggleLike = () => {
    const { _id } = this.props
    this.props.toggleLikeBatch(_id)
  }

  render() {
    const { _id, batchName ,endDate, startDate, yellow, red, green, photo, liked } = this.props
    const categories = { yellow, red, green }

    return(
      <article className="BatchItem">
        <header>
          <h1>
            <Link to={`/batches/${_id}`}>
              {batchName}
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
          <LikeButton
            onChange={this.toggleLike}
            liked={liked}
          />
        </footer>
      </article>
    )
  }
}

const mapDispatchToProps = {
  toggleLikeBatch
}

export default connect(null, mapDispatchToProps)(BatchItem)
