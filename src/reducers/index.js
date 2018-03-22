import { combineReducers } from 'redux'
import planet from './planet_reducer'

const compareApp = combineReducers({
  planet
})

export default compareApp