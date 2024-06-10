import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Layout/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Home1/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddUser from './User/AddUser';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import UpdateUser from './User/UpdateUser';
import ViewUser from './User/ViewUser';
function App() {
  return (
    <div className="App">  
    <Router>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route exact path='/add-user' element={<AddUser/>} />
        <Route exact path='/edit-user/:id' element={<UpdateUser />} />
        <Route exact path='/view-user/:id' element={<ViewUser/>}/>
      </Routes>
    </Router>
    
    </div>
  );
}

export default App;
