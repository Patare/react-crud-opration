// import axios from "axios";
// import React,{ useEffect,useState } from "react";
// import {useParams } from "react-router-dom";
// import {useNavigate } from "react-router-dom";

// export default function UserUpdate(){
//     let navi=useNavigate();
//     var usepara=useParams();
//     var [id1,setId1]=useState();
//     var [name,setName]=useState();
//     var [email,setEmail]=useState();
//     var [address,setAddress]=useState();
//     var [phone,setPhone]=useState();
//     useEffect(()=>{
//         laodinfo();
//     },[])
//     var laodinfo=async()=>{
//         var res =await axios.get(`http://localhost:3000/user/${usepara.id}`);
//         // console.log(res.data);
//         setId1(res.data.id)
//         setName(res.data.name);
//         setEmail(res.data.email);
//         setAddress(res.data.address);
//         setPhone(res.data.phone);
//     }
//     var submitform=async(id)=>{
//         await axios.put(`http://localhost:3000/user/${id}`,{
//             name:name,
//             email:email,
//             address:address,
//             phone:phone,
//         })
//         .then(response=>{
//             alert("success");
//             navi('/userlist');
//         })
//         .catch(error=>{
//             alert("error");
//         })
//     }
//     return(
//         <>
//         <h1>Update User</h1>
//          <form >
//         <div className="container">
//             <div className="row">
//                 <div className="col-6">
//                     <label>Name</label>
//                     <input type="text" onChange={(e)=>setName(e.target.value)} defaultValue={name} className="form-control mt-2"/>
//                 </div>
//                 <div className="col-6">
//                     <label>Email</label>
//                     <input type="text" onChange={(e)=>setEmail(e.target.value)} defaultValue={email}  className="form-control mt-2"/>
//                 </div>
//                 <div className="col-6">
//                     <label>Address</label>
//                     <input type="text" onChange={(e)=>setAddress(e.target.value)} defaultValue={address}  className="form-control mt-2"/>
//                 </div>
//                 <div className="col-6">
//                     <label>Phone</label>
//                     <input type="text" onChange={(e)=>setPhone(e.target.value)} defaultValue={phone}  className="form-control mt-2"/>
//                 </div>
//                 <div className="col-12 mt-4 text-center">
//                     <button className="btn btn-warning" onClick={()=>submitform(usepara.id)} >Save</button>
//                 </div>
//             </div>
//         </div>
//         </form>
//         </>
//     )
// }




import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function UserUpdate(){
    let navi=useNavigate();
    var usepara=useParams();
    var [id1,setId1]=useState();
    var [name,setName]=useState();
    var [email,setEmail]=useState();
    var [phone,setPhone]=useState();
    var [address,setAddress]=useState();

    useEffect(()=>{
        laodinfo();
    },[])
    var laodinfo=async()=>{
       var res= await axios.get(`http://localhost:3000/user/${usepara.id}`);
       setId1(res.data.id)
       setName(res.data.name);
       setEmail(res.data.email);
       setPhone(res.data.phone);
       setAddress(res.data.address);
    }
   var submitform=async(id)=>{
    await axios.put(`http://localhost:3000/user/${id}`,{
        name:name,
        email:email,
        phone:phone,
        address:address,
    })
    .then(response=>{
        alert("success");
        navi('/userlist');
    })
    .catch(error=>{
        alert("error");
    })
    }
    return(
        <>
        <h1 className="text-center">Update User</h1>
        <div className="container">
            <div className="row">
                <div className="col-6">
                    <label>Name</label>
                    <input type="text" onChange={(e)=>setName(e.target.value)} defaultValue={name} className="form-control mt-2"/>
                </div>
                <div className="col-6">
                    <label>Email</label>
                    <input type="text" onChange={(e)=>setEmail(e.target.value)} defaultValue={email}  className="form-control mt-2"/>
                </div>
                <div className="col-6">
                    <label>Phone</label>
                    <input type="text" onChange={(e)=>setPhone(e.target.value)} defaultValue={phone} className="form-control mt-2"/>
                </div>
                <div className="col-6">
                    <label>Address</label>
                    <input type="text" onChange={(e)=>setAddress(e.target.value)} defaultValue={address}  className="form-control mt-2"/>
                </div>
                <div className="col-12 mt-4 text-center">
                    <button onClick={()=>submitform(usepara.id)} className="btn btn-warning">Save</button>
                </div>
            </div>
        </div>
        </>
    )
}