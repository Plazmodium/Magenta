import { NAVIGATE } from '../Actions/actionTypes'

const initialState = {
  toScreen: "Screen1"
}

const navigationReducer = (state = initialState, action) => {

  switch (action.type) {
    case NAVIGATE:
      return Object.assign({}, state, {
        toScreen: action.toScreen
      })

    default:
      return state
  }
}

export default navigationReducer
