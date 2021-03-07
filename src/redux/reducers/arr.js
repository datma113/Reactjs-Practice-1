import * as types from '../constants/ActionTypes'

let initState = ['A', 'B', 'C']

let reducer = (state = initState, action) => {

     if(action.type === types.ADD_ITEM) {
          let newState = [...state]
          newState.push(action.item)
          
          return newState
     }
     return state
}

export default reducer