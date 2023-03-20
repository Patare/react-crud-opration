import axios from "axios";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function Userdelete(){
    let nevi=useNavigate();
    var para=useParams();
    useEffect=(()=>{
        delt();
    })
    const delt=async()=>{
        await axios.delete(`http://localhost:3000/user/${para.id}`)
        .then(response=>{
            alert("Delete Successfuly")
            nevi('/useradd')
        })
        .catch(error=>{
           alert("error")
        })

        }
    }
 
