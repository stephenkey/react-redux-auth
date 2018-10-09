import { userConstants } from '../../constants/userConstants';

export function signOutAction() {
  localStorage.clear();
  return {
    type: userConstants.UNAUTHENTICATED
  };
}