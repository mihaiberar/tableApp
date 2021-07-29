import { combineReducers } from 'redux'
import fetchReducer from './fetchReducer'

const rootReducer = combineReducers({
  fetchedData: fetchReducer
})

export default rootReducer
