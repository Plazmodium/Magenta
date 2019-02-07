import { BACKGROUND_CHANGED } from '../Actions/actionsTypes'

const initialState = {
  backgroundState: false
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BACKGROUND_CHANGED:
      return Object.assign({}, state, {
        backgroundState: action.backgroundState
      })
    default:
      return state
  }
}

export default reducer
