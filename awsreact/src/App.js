import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/auth/Login';
// import SignUp from './components/SignUp';
// import ForgotPassword from './components/ForgotPassword';
// import Upload from './components/Upload';
import Navbar from './components/navigation/Navbar';

function App() {
  return (
    // <>hhhh</>
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/login" element={<Login/>} />
          {/* <Route path="/signup" element={<SignUp />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/upload" element={<Upload />} /> */}
          <Route path="/" element={<h2>Welcome to the Cognito S3 App</h2>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;


