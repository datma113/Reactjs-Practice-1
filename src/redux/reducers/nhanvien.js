import * as types from "../constants/ActionTypes";


let initState = []

const reducer = (state = initState, action) => {

    if(action.types === types.UPLOAD_DATA) {
        console.log(`data thunk:`, action.data)
        return [...state, action.data]
    }
   return state
};

export default reducer;
