import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
function Userlist() {
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
            <h1 className="text-center">Student Data</h1>
            <table className="table table-border bg-dark text-white text-center">
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Address</th>
                    <th>Phone</th>
                    <th>Status</th>
                </tr>
                {
                    data.map((item) => {
                        return (
                            <tr className="map">
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.address}</td>
                                <td>{item.phone}</td>
                                <NavLink className="btn btn-warning mt-1" to={`/updateuser/${item.id}`}>Update</NavLink>
                                <NavLink className="btn btn-danger mt-1" to={`/deleteuser/${item.id}`}>Delete</NavLink>
                            </tr>
                        )
                    })
                }
            </table>
        </>
    )
} export default Userlist;