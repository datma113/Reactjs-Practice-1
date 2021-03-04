import * as types from '../constants/ActionTypes'


let initState = false

let reducer = (state = initState, action) => {
     
     if(action.type === types.TONGGLE_STATUS) {
          state = !state
          console.log(`reducer: action toggle`)
     }
     return state
}

export default reducer

