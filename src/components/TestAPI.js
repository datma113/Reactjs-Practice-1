import React, { useEffect, useState } from "react";
import axios from "axios";

const TestAPI = () => {
    let url = "http://localhost:8080/Springmvc_linhkienmaytinh/api/nhanviens";

    const [data, setData] = useState([]);
    useEffect(() => {
        async function getData() {
            axios
                .get(url)
                .then((res) => {
                    setData(res.data);
                })
                .catch((err) => {
                    console.log(err);
                });
        }
        getData();
    }, []);

    const dataMap = data.map((x, index) => {
        return (
            <div  key={index}>
                 <hr></hr>
                <p> mã nhân viên: {x.manhanvien}</p>
                <p > họ đệm: {x.hodem}</p>
                <p> tên: {x.ten}</p>
                
            </div>
        );
    });

    return (
        <div className="container">
            test api
            {dataMap}
        </div>
    );
};

export default TestAPI;
