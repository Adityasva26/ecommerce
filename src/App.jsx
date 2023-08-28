import React from 'react';
import Dashboard from './Admin/adminPages/Dashboard';
import Userlist from './Admin/adminPages/User/User';
import AddUpdateUser from './Admin/adminPages/User/AddUser';
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
    <Routes>
      <Route exact path="/" element={<Dashboard />} />
      <Route exact path="/User" element={<Userlist />} />
      <Route exact path="/AddUpdateUser" element={<AddUpdateUser />} />
   </Routes>
   </Router>
  
  );
}

export default App
