import { userConstants } from '../../constants/userConstants'

export default function(state={}, action) {
  switch(action.type) {
    case userConstants.AUTHENTICATED:
      return { ...state, authenticated: true }
    case userConstants.UNAUTHENTICATED:
      return { ...state, authenticated: false }
    case userConstants.AUTHENTICATION_ERROR:
      return { ...state, error: action.payload }
  }
  return state
}