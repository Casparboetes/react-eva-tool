import ApiClient from '../api/client'

export const FETCHED_BATCHES = 'FETCHED_BATCHES'
export const FETCHED_ONE_BATCH = 'FETCHED_ONE_BATCH'

const api = new ApiClient()

export const fetchBatches = () => {
  return dispatch => {
    const path = '/batches'

    api.get(path)
      .then(res => dispatch({ type: FETCHED_BATCHES, payload: res.body }))
      .catch(err => dispatch(err))
  }
}

export const fetchBatchById = (batchId) => {
  return dispatch => {
    const path = `/batches/${batchId}`

    api.get(path)
      .then(res => dispatch({ type: FETCHED_ONE_BATCH, payload: res.body }))
      .catch(err => dispatch(err))
  }
}
