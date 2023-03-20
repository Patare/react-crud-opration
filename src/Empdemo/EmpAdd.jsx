import axios from "axios";
import React from "react";

class EmpAdd extends React.Component {
    constructor() {
        super();
        this.state = {
         ename:"",
         esalary:"",
         eage:"",
         efield:"",
        }
    }
    changeename=(event)=>{
        this.setState({
            ename:event.target.value,
        })
    }
    changeesalary=(event)=>{
        this.setState({
            esalary:event.target.value,
        })
    }
    changeeage=(event)=>{
        this.setState({
            eage:event.target.value,
        })
    }
    changeefield=(event)=>{
        this.setState({
            efield:event.target.value,
        })
    }


    sumit=async(event)=> {
        event.preventDefault();
        await axios.post('http://localhost:3000/user',this.state);
        alert("insert data successfuly")
        console.log(this.state)
    }
    render() {
        return (
            <>
                <div className="container">
                    <form action="" onSubmit={this.sumit}>
                        <div className="row">
                            <div className="col-3"></div>
                            <div className="col-6 backgroundimg">
                                <label htmlFor="Emp Name">Emp Name </label><br />
                                <input type="text" className="text-center" value={this.state.ename} onChange={this.changeename} placeholder="Emp Name" /><br />
                                <label htmlFor="Emp Salary">Emp Salary </label><br />
                                <input type="number" className="text-center" value={this.state.esalary} onChange={this.changeesalary} placeholder="Emp Salary" /><br />
                                <label htmlFor="Emp Age">Emp Age </label><br />
                                <input type="number" className="text-center" value={this.state.eage} onChange={this.changeeage} placeholder="Emp Age" /><br />
                                <label htmlFor="Emp Field">Emp Field </label><br />
                                <input type="text" className="text-center" value={this.state.efield} onChange={this.changeefield} placeholder="Emp Field" /><br /><br />
                                <button className="btn btn-danger">Save</button>
                            </div>

                            <div className="col-3"></div>
                        </div>
                    </form>
                </div>
            </>
        )
    }
}
export default EmpAdd;