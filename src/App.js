import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import PhishingDetector from './components/PhishingDetector';
import AccountDash from './components/AccountDash';
import Profile from './components/Profile'; // Import the Profile component
import History from './components/History'; // Import the History component
import SafeContent from './components/SafeContent'; // Add the SafeContent component
import NotSafeContent from './components/NotSafeContent';  // Import the NotSafe component
import About from './components/About';
import Contact from './components/Contact';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Dashboard />} /> {/* Default route */}
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/detect" element={<PhishingDetector />} />
                <Route path="/account-dash" element={<AccountDash />} />
                <Route path="/profile" element={<Profile />} /> {/* Add the Profile route */}
                <Route path="/history" element={<History />} /> {/* Add history route */}
                <Route path="/safe" element={<SafeContent />} /> {/* Add the Safe Content route */}
                <Route path="/not-safe" element={<NotSafeContent />} />  {/* Add the route for /not-safe */}
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                
            </Routes>
        </Router>
    );
}

export default App;
