import ApiClient from '../api/client'
import { loading, loadError } from './loading'

export const FETCHED_STUDENTS = 'FETCHED_STUDENTS'
export const FETCHED_ONE_STUDENT = 'FETCHED_ONE_STUDENT'

const api = new ApiClient()

export const fetchStudents = () => {
  return dispatch => {
    const path = `/`
    dispatch(loading(path, true))

    api.get(path)
      .then(res => dispatch({ type: FETCHED_STUDENTS, payload: res.body }))
      .catch(err => dispatch(loadError(err)))

    dispatch(loading(path, false))
  }
}

export const fetchStudentById = (studentId) => {
  return dispatch => {
    const path = `/students/${studentId}`
    dispatch(loading(path, true))

    api.get(path)
      .then(res => dispatch({ type: FETCHED_ONE_STUDENT, payload: res.body }))
      .catch(err => dispatch(loadError(err)))

    dispatch(loading(path, false))
  }
}

// export const toggleLikeBatch = (batchId) => {
//   return {
//     type: 'TOGGLE_LIKE_STUDENT',
//     payload: batchId
//   }
// }
