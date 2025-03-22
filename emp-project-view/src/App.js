import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Only this line is needed
import './App.css';
import Navbar from './components/Navbar';
import Employee from './components/Employee';
import AddEmployee from './components/AddEmployee';
import UpdateEmployee from "./components/updateEmployee"; // Use lowercase "u"



function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Employee />} />
        <Route path="/addEmployee" element={<AddEmployee />} />
        <Route path="/editEmployee/:id" element={<UpdateEmployee />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App