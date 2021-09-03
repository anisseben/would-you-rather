import { SET_AUTHED_USER,TOGGLE_USER } from '../actions/authedUser'

export default function authedUser (state = null, action) {
  switch (action.type) {
    case SET_AUTHED_USER :
      return action.id
    case TOGGLE_USER :
        return action.id

    default :
      return state
  }
}
