import ApiClient from '../api/client'

export const FETCHED_STUDENTS = 'FETCHED_STUDENTS'
export const FETCHED_ONE_STUDENT = 'FETCHED_ONE_STUDENT'

const api = new ApiClient()

export const fetchStudents = () => {
  return dispatch => {
    const path = `/`

    api.get(path)
      .then(res => dispatch({ type: FETCHED_STUDENTS, payload: res.body }))
      .catch(err => dispatch(err))
  }
}

export const fetchStudentById = (studentId) => {
  return dispatch => {
    const path = `/students/${studentId}`

    api.get(path)
      .then(res => dispatch({ type: FETCHED_ONE_STUDENT, payload: res.body }))
      .catch(err => dispatch(err))
  }
}
