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

export const getVolumeOptions = () => {
  return () => {
    return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
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
const initialState = 100
export default function volumeReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
