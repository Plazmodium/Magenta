import { NAVIGATE, INCREMENET } from '../Actions/actionsTypes'

const initialState = {
  navigationState: "",
  numb: 0
}

const reducer = (state = initialState, action) => {
  switch (action.type) {

    case INCREMENET:
      return Object.assign({}, state, {
        numb: state.numb + 1
      })
    
    default:
      return state
  }
}

export default reducer
