import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import HomePage from './pages/HomePage';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '@fortawesome/fontawesome-free/css/all.min.css';
import DvdmsDashboard from './pages/DvdmsDashboard';
import ChangeDvdmsPass from './pages/ChangeDvdmsPass';
import ChangeUserDetails from './pages/ChangeUserDetails';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dvdms-central-dashboard" element={<DvdmsDashboard />} />
          <Route path="/dvdms-change-password" element={<ChangeDvdmsPass />} />
          <Route path="/dvdms-change-user" element={<ChangeUserDetails />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
