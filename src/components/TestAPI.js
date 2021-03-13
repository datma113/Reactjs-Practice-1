import React, {useEffect, useState} from 'react'
import axios from 'axios'

const TestAPI = () => {

     let url = 'http://localhost:8080/Springmvc_linhkienmaytinh/api/nhanviens'
   
     let data = []
     useEffect(() => {
        axios.get(url).then(res => {
             data = (res.data)
        })
        .catch(err => {
             console.log(err)
        })
    })

    setTimeout(() => {
         const dataMap = data.map( x => {
              return <p>x.manhanvien</p>
         })
    }, 5000);
     return (
          <div className="container">
               test api 
           
          </div>
     )
}

export default TestAPI
