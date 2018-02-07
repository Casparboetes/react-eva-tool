import { FETCHED_STUDENTS, FETCHED_ONE_STUDENT, FETCHED_STUDENTS_BY_BATCHNUM } from '../actions/students'

export default (state = [], { type, payload } = {}) => {
  switch (type) {
    case FETCHED_STUDENTS :
      return payload.concat(state)

    case FETCHED_ONE_STUDENT :
      return [payload].concat(state)

    case FETCHED_STUDENTS_BY_BATCHNUM :
      return payload

    default :
      return state
  }
}

// Thanks
// case FETCHED_ONE_GAME :
//   const gameIds = state.map(g => g._id)
//   if (gameIds.indexOf(payload._id) < 0) {
//     return [{ ...payload }].concat(state)
//   }
//   return state.map((game) => {
//     if (game._id === payload._id) {
//       return { ...payload }
//     }
//     return game
//   })
