import React from 'react'
import axios from 'axios'
const TestAPI = () => {

     let url = 'http://localhost:8080/Springmvc_linhkienmaytinh/api/hoadons'
   

     const getData = () => {

        axios.get(url)
        .then( res => {
          console.log(res)
        })
        .catch( err => {
             console.log(`=========`)
             console.log(err)
        })
     }     
     return (
          <div className="container">
               test api 
               <button onClick={getData}>click</button>
          </div>
     )
}

export default TestAPI
