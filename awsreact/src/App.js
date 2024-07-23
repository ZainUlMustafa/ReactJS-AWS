import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/auth/Login';
// import SignUp from './components/SignUp';
// import ForgotPassword from './components/ForgotPassword';
// import Upload from './components/Upload';
import Navbar from './components/navigation/Navbar';
import Signup from './components/auth/SignUp';
import Home from './components/home/Home';

function App() {
  return (
    // <>hhhh</>
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<Signup />} />
          {/* <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/upload" element={<Upload />} /> */}
          <Route path="/" element={<Home/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;


