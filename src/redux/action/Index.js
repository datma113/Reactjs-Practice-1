import axios from 'axios'
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

export const addItem = (item) => {
     return {
          type: types.ADD_ITEM,
          item,
     }
}

export const uploadData = (data) => {
     return {
          type: types.UPLOAD_DATA,
          data
     }
}

let url = "http://localhost:8080/Springmvc_linhkienmaytinh/api/nhanviens";
export const requestAPI = () => {
     return dispatch => {
         
          return axios.get(url)
          .then( res => {           
               dispatch(uploadData(res.data))
          })
          .catch(err => {
               console.log(err)
          })
     }
}