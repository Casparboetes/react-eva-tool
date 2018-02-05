// src/reducers/batches.js

import { FETCHED_BATCHES, FETCHED_ONE_BATCH } from  '../actions/batches'

export default (state = [], { type, payload } = {}) => {
  switch (type) {
    case FETCHED_BATCHES :
      return payload.slice()

    case FETCHED_ONE_BATCH :
      return [payload].concat(state)

    default :
      return state
  }
}
