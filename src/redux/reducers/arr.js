import * as types from '../constants/ActionTypes'

let localData = localStorage.getItem('array')

let initState = localData ? JSON.parse(localData) : []

let reducer = (state = initState, action) => {

     if(action.type === types.ADD_ITEM) {
          let newState = [...state]
      
               newState.push(action.item)
               localStorage.setItem('array', JSON.stringify(newState))
         
          console.log(localStorage.getItem('array'))

          return newState
     }
     return state
}

export default reducer