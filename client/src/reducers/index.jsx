import { combineReducers } from 'redux'; 
import user from './user.jsx'

const allReducers = combineReducers({
  user: user
})

export default allReducers;