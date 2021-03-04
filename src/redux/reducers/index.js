import status from './status'
import text from './text'
import { combineReducers } from 'redux'

let reducer = combineReducers({
     status,
     text
})


export default reducer;