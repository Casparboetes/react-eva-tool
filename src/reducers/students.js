import { FETCHED_STUDENTS, FETCHED_ONE_STUDENT } from '../actions/students'

export default (state = [], { type, payload } = {}) => {
  switch (type) {
    case FETCHED_STUDENTS :
      return payload.slice()

    case FETCHED_ONE_STUDENT :
      return [payload].concat(state)

    case 'TOGGLE_LIKE_BATCH' :
      return state.map((batch) => {
        if (student._id !== payload) return student
        return { ...student, liked: !student.liked }
      })

    default :
      return state
  }
}
