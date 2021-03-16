import * as types from "../constants/ActionTypes";


let initState = []

const reducer = (state = initState, action) => {

    if(action.type === types.UPLOAD_DATA) {
        return  action.data
    }
   return state
};

export default reducer;
