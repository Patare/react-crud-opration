import React from "react";
import { NavLink } from "react-router-dom";

function Navbar(){
  return(
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <h1 className="navbar-brand mt-1">Employee</h1>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink className="nav-link active ml-2" aria-current="page" to="/home">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link ml-2" to="/empadd">EADD</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link ml-2" to="/emplist">Pricing</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}
export default Navbar;