import React from "react" 
import { createStore } from "redux" 
import Reducer from '../redux/reducers/index'
import * as Action from '../redux/action/Index'

const TestRedux = () => {
  let initState = {
    testing: false,
    text: 'abc'
  } 

  let reducer = (state = initState, action) => {
    let stateTemp = {...state} 
    switch(action.type) {
      case 'TOGGLE_TESTING':       
      stateTemp.testing = !stateTemp.testing 
        break 
      case 'CHANGE_TEXT':
        stateTemp.text = 'xyz' 
    }

    return stateTemp 
  } 

  const store = createStore(reducer) 

  console.log(`init: `,store.getState()) 

  let action1 = { type: 'TOGGLE_TESTING' } 

  store.dispatch(action1) 

  let action2 = { type: 'CHANGE_TEXT'} 

  store.dispatch(action2) 

  console.log(`change: `, store.getState()) 
  /**
   * file structure
   */
  console.log(`------redux with file structure------`) 

  const anotheStore = createStore(Reducer)

  anotheStore.dispatch(Action.action1())
  anotheStore.dispatch(Action.actionWithParameters())


  return <div>redux</div>
} 

export default TestRedux 
