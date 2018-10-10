import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import authReducer from './authReducer'
import themeReducer from './themeReducer'
// import examples from "./examples";

// export default combineReducers({ examples, others });
export default combineReducers({ form: formReducer, auth: authReducer, themeReducer })