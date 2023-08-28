import React from 'react';
import Dashboard from './Admin/adminPages/Dashboard';
import Userlist from './Admin/adminPages/User';
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
    <Routes>
      <Route exact path="/" element={<Dashboard />} />
      <Route exact path="/User" element={<Userlist />} />
   </Routes>
   </Router>
  
  );
}

export default App
