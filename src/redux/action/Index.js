
import * as types from '../constants/ActionTypes'

export const action1 = () => {
     return {
          type: types.TONGGLE_STATUS
     }
}

export const actionWithParameters = (somethings) => {
     return {
          type: types.CHANGE_TEXT,
          somethings
     }
}