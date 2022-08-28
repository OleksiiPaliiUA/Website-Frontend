import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';
import Users from './pages/Users';

export default function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/users' element={<Users />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}
