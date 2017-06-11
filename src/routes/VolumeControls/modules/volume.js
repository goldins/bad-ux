// ------------------------------------
// Constants
// ------------------------------------
export const VOLUME_SET = 'VOLUME_SET'

// ------------------------------------
// Actions
// ------------------------------------
export function setVolume (value = 1) {
  return {
    type: VOLUME_SET,
    payload: value
  }
}

const map = require('lodash/fp/map').convert({ 'cap': false })
export const getVolumeOptions = () => {
  // create 101-length array (mute + 100 volume levels)
  const opts = Array.apply(null, { length: 101 })
  return () => {
    // fill with values of 0 - 101
    return map((v, i) => i)(opts)
  }
}

export const actions = {
  setVolume,
  getVolumeOptions
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [VOLUME_SET]: (state, action) => action.payload
}

// ------------------------------------
// Reducer
// ------------------------------------
// initial value
const volumeOptions = getVolumeOptions()()
const initialIndex = Math.floor(volumeOptions.length / 2)
// initial state = volume at middle index
const initialState = volumeOptions[initialIndex]
export default function volumeReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
