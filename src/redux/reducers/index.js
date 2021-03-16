import status from './status'
import text from './text'
import size from './size'
import arr from './arr'
import nhanviens from './nhanvien'

import { combineReducers } from 'redux'

let reducer = combineReducers({
     status,
     text,
     size,
     arr,
     nhanviens
})


export default reducer;