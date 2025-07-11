import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Homepage from './components/Homepage';
import AddSubmission from './components/AddSubmission';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/submit" element={<AddSubmission />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;