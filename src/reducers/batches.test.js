// src/reducers/batches.test.js

import reducer, { batches } from './batches'

describe('batches reducer', () => {
  const initialState = batches

  it('returns an empty array for the initial state', () => {
    expect(reducer()).toEqual(initialState)
  })

  describe('TOGGLE_LIKE_BATCH', () => {
    const initialState = [
      {
        _id: 1234,
        liked: false
      },
      {
        _id: 1235,
        liked: false
      }
    ]

    const action = {
      type: 'TOGGLE_LIKE_BATCH',
      payload: 1234
    }

    const eventualState = [
      {
        _id: 1234,
        liked: true
      },
      {
        _id: 1235,
        liked: false
      }
    ]

    it('toggles batch.liked', () => {
      expect(reducer(initialState, action)).toEqual(eventualState)
    })
  })
})
