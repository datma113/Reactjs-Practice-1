import React, { useEffect, useState } from "react";

import {useDispatch, useSelector} from 'react-redux'
import {requestAPI} from '../redux/action/Index'


const TestAPI = () => {
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(requestAPI())
    }, [])

    const state = useSelector(state => state.nhanviens)
    console.log(state)


    // const dataMap = state.map((x, index) => {
    //         return (
    //             <div  key={index}>
    //                  <hr></hr>
    //                 <p> mã nhân viên: {x.manhanvien}</p>
    //                 <p > họ đệm: {x.hodem}</p>
    //                 <p> tên: {x.ten}</p>              
    //             </div>
    //         );      
    // });

    return (
        <div className="container">
            test api
            {/* {dataMap} */}
        </div>
    );
};

export default TestAPI;
