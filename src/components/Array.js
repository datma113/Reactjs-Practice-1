import { React } from "react"
import { useSelector, useDispatch } from "react-redux"

import * as types from "../redux/constants/ActionTypes"

const Array = () => {
  const arrOb = useSelector(state => state.arr)

  const dispatch = useDispatch()

  let arrObMap = arrOb.map((x, index) => {
    return <span key={index}> {x} </span>
  })

  const onKey = (event) => {

    if (event.key === "Enter") {
      let item = event.target.value;

      dispatch({
        type: types.ADD_ITEM,
        item,
      })
      event.target.value = ''
    }
  }

  return (
    <div className="container">
      <div className="form-group col-5">
        <label htmlFor="#"></label>
        <input
          type="text"
          className="form-control"
          onKeyUp={onKey}
        />
      </div>
      Array: {arrObMap}
    </div>
  )
}

export default Array
