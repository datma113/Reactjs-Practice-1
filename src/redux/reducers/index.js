import status from './status'
import text from './text'
import size from './size'
import { combineReducers } from 'redux'

let reducer = combineReducers({
     status,
     text,
     size
})


export default reducer;