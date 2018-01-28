import ApiClient from '../api/client'
import { loading, loadError } from './loading'

export const FETCHED_BATCHES = 'FETCHED_BATCHES'
export const FETCHED_ONE_BATCH = 'FETCHED_ONE_BATCH'

const api = new ApiClient()

export const fetchBatches = () => {
  return dispatch => {
    const path = '/batches'
    dispatch(loading(path, true))

    api.get(path)
      .then(res => dispatch({ type: FETCHED_BATCHES, payload: res.body }))
      .catch(err => dispatch(loadError(err)))

    dispatch(loading(path, false))
  }
}

export const fetchBatchById = (id) => {
  return dispatch => {
    const path = `/batches/${id}`
    dispatch(loading(path, true))

    api.get(path)
      .then(res => dispatch({ type: FETCHED_ONE_BATCH, payload: res.body }))
      .catch(err => dispatch(loadError(err)))

    dispatch(loading(path, false))
  }
}

// export const toggleLikeBatch = (batchId) => {
//   return {
//     type: 'TOGGLE_LIKE_BATCH',
//     payload: batchId
//   }
// }
