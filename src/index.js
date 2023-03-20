import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import Navbar from './Navbar.jsx'
import UserAdd from './UserAdd.jsx'
import Userlist from './Userlist.jsx'
import UserDelete from './UserDelete.jsx'
import UserUpdate from './UserUpdate.jsx'
import Deven from './Deven.jsx'

ReactDOM.render(
  <>
{/* <Deven></Deven> */}
     <Router>
      <Navbar></Navbar>
      <Routes>
        <Route path='/useradd' element={<UserAdd></UserAdd>}></Route>
        <Route path='/userlist' element={<Userlist></Userlist>}></Route>
        <Route path='/deleteuser/:id' element={<UserDelete></UserDelete>}></Route>
        <Route path='/updateuser/:id' element={<UserUpdate></UserUpdate>}></Route>
      </Routes>
    </Router> 
  </>
  , document.getElementById('root'))









// import React from 'react';
// import ReactDOM from 'react-dom';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import './index.css';
// import Navbar from './Empdemo/Navbar.jsx'
// import Home from './Empdemo/Home.jsx'
// import EmpAdd from './Empdemo/EmpAdd.jsx'
// import Emplist from './Empdemo/Emplist.jsx'
// import Userdelete from './Empdemo/Userdelete.jsx'
// import Userupdate from './Empdemo/Userupdate.jsx'


// ReactDOM.render(
//   <>
//     <Router>
//       <Navbar></Navbar>
//       <Routes>
//       <Route path='/home' element={<Home></Home>}></Route>
//         <Route path='/empadd' element={<EmpAdd></EmpAdd>}></Route>
//         <Route path='/emplist' element={<Emplist></Emplist>}></Route>
//         <Route path='/deleteuser/:id' element={<Userdelete></Userdelete>}></Route> 
//          <Route path='/updateuser/:id' element={<Userupdate></Userupdate>}></Route>
//       </Routes>
//     </Router>
//   </>
//   , document.getElementById('root'))