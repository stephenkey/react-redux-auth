import axios from 'axios';
import { appConstants } from '../../constants/appConstants'
import { userConstants } from '../../constants/userConstants'

export function signInAction({ email, password }, history) {
  return async (dispatch) => {
    try {
      const res = await axios.post(`${appConstants.BASE_URL}/users/login`, { email, password })

      dispatch({ type: userConstants.AUTHENTICATED })
      localStorage.setItem('user', res.data.token)
      history.push('/private')
    } catch(error) {
      dispatch({
        type: userConstants.AUTHENTICATION_ERROR,
        payload: 'Invalid email or password'
      })
    }
  }
}