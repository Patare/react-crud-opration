import axios from "axios";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function UserDelete(){
    let navi=useNavigate();
    var para=useParams();
    useEffect(()=>{
        deldate();
    })
    const deldate=async()=>{
        await axios.delete(`http://localhost:3000/user/${para.id}`)
        .then(response=>{
            alert("successfuly delete")
            navi('/userlist');
        })
        .catch(error=>{
            alert("error");
        })
    }
}