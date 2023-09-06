import React from 'react';
import Dashboard from './Admin/adminPages/Dashboard';
import Userlist from './Admin/adminPages/User/User';
import AddUpdateUser from './Admin/adminPages/User/AddUser';
import Login from './Admin/adminPages/login';
import NotFound from './NotFound';
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
    <Routes>
      <Route exact path="/Admin" element={<Dashboard />} />
      <Route exact path="/Admin/User" element={<Userlist />} />
      <Route exact path="/Admin/user/:service/:id" element={<AddUpdateUser />} />
      <Route exact path="/Admin/user/Add" element={<AddUpdateUser />} />
      <Route exact path="/" element={<Login />} />
      <Route path="*"  element={<NotFound />} />
   </Routes>
   </Router>
  
  );
}

export default App
