import { userConstants } from '../../constants/userConstants'

export function signOutAction() {
  return dispatch => {
    localStorage.clear()
    dispatch({ type: userConstants.UNAUTHENTICATED })
  }
}