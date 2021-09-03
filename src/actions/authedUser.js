export const SET_AUTHED_USER = 'SET_AUTHED_USER'
export const TOGGLE_USER = 'TOGGLE_USER'

export function setAuthedUser (id) {
  return {
    type: SET_AUTHED_USER,
    id,
  }
}

export function toggleUser(id){
  return{
  type: TOGGLE_USER,
  id,
  }
}

export function handleToggleUser(id){
  return (dispatch) => {
    dispatch(toggleUser(id))
}
}
