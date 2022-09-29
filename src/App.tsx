import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';
import UserCreate from './pages/users/UserCreate';
import Users from './pages/users/Users';

export default function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/' element={<Dashboard />} />
          <Route path='/users' element={<Users />} />
          <Route path='/users/create' element={<UserCreate />} />
        </Routes>
      </Router>
    </div>
  );
}
