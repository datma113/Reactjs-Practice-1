import * as types from '../constants/ActionTypes'

let initState = 'index.js reducers init state'

let reducer = (state = initState, action) => {
     
     if(action.type === types.CHANGE_TEXT) {
          state = 'changed by reducer!!!'
          console.log(`reducer: change text:`, state);
     }

     return state;
}

export default reducer;
