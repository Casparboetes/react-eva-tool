// src/reducers/batches.js

import { FETCHED_BATCHES, FETCHED_ONE_BATCH } from  '../actions/batches'

export default (state = [], { type, payload } = {}) => {
  switch (type) {
    case FETCHED_BATCHES :
      return payload.slice()

    case FETCHED_ONE_BATCH :
      return [payload].concat(state)

    case 'TOGGLE_LIKE_BATCH' :
      return state.map((batch) => {
        if (batch._id !== payload) return batch
        return { ...batch, liked: !batch.liked }
      })

    default :
      return state
  }
}
