import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
function Emplist() {
    const [data, setData] = useState([]);
    useEffect(() => {
        loaduser()
    })
    var loaduser = async () => {
        var res = await axios.get('http://localhost:3000/user')
        console.log(res.data)
        setData(res.data)
    }

    return (
        <>
            <h1 className="text-center">Employee Data</h1>
            <table className="table table-border bg-warning text-center">
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Salary</th>
                    <th>Age</th>
                    <th>Field</th>
                    <th>Status</th>
                </tr>
                {
                    data.map((item) => {
                        return (
                            <tr className="map">
                                <td>{item.id}</td>
                                <td>{item.ename}</td>
                                <td>{item.esalary}</td>
                                <td>{item.eage}</td>
                                <td>{item.efield}</td>
                                <NavLink className="btn btn-warning mt-1" to={`/updateuser/${item.id}`}>Update</NavLink>
                                <NavLink className="btn btn-danger mt-1" to={`/deleteuser/${item.id}`}>Delete</NavLink>
                            </tr>
                        )
                    })
                }
            </table>
        </>
    )
} export default Emplist;