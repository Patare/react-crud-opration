import axios from "axios";
import React from "react";
class UserAdd extends React.Component{
    constructor(){
        super();
        this.state={
            name:"",
            email:"",
            address:"",
            phone:"",
        }
    }
    changename=(event)=>{
        this.setState({
            name:event.target.value,
        })
    }
    changeemail=(event)=>{
        this.setState({
            email:event.target.value,
        })
    }
    changeaddress=(event)=>{
        this.setState({
            address:event.target.value,
        })
    }
    changephone=(event)=>{
        this.setState({
            phone:event.target.value,
        })
    }
    subdata=async(event)=>{
                event.preventDefault();
                await axios.post('http://localhost:3000/user',this.state);
                alert("successfuly Insert Data")
            }
    render(){
    return(
        <>
        <h1 className="text-center mt-4 mb-3">New User Add</h1>
        <form action="" onSubmit={this.subdata}>
        <div className="container">
            <div className="row">
                <div className="col-6">
                    <label>Name</label>
                    <input type="text" value={this.state.name} onChange={this.changename} className="form-control mt-2"/>
                </div>
                <div className="col-6">
                    <label>Email</label>
                    <input type="text" value={this.state.email} onChange={this.changeemail} className="form-control mt-2"/>
                </div>
                <div className="col-6">
                    <label>Address</label>
                    <input type="text" value={this.state.address} onChange={this.changeaddress} className="form-control mt-2"/>
                </div>
                <div className="col-6">
                    <label>Phone</label>
                    <input type="text" value={this.state.phone} onChange={this.changephone} className="form-control mt-2"/>
                </div>
                <div className="col-12 mt-4 text-center">
                    <button className="btn btn-warning">Save</button>
                </div>
            </div>
        </div>
        </form>
        </>
    )
    }
}
export default UserAdd;