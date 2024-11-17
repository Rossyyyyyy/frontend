import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function SafeContent() {
    const [history, setHistory] = useState([]);
    const [email, setEmail] = useState(null); // State for storing the email

    // Fetch phishing history from localStorage or API
    useEffect(() => {
        const storedEmail = localStorage.getItem('email');
        if (storedEmail) {
            setEmail(storedEmail);
        }

        // Simulate fetching history from localStorage or an API
        const storedHistory = JSON.parse(localStorage.getItem('phishingHistory')) || [];
        
        // Filter to get only safe content (Phishing Detected: No)
        const safeHistory = storedHistory.filter(item => !item.is_phishing);
        setHistory(safeHistory);
    }, []);

    return (
        <div style={{ backgroundColor: '#D76C82', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            {/* Navbar */}
            <nav style={{ backgroundColor: '#B03052', padding: '1em', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <i className="fas fa-shield-alt" style={{ color: 'white', fontSize: '2em', marginRight: '10px' }}></i> {/* Icon in Navbar */}
                    <h1 style={{ color: 'white', margin: 0 }}>Email Phishing Detector</h1>
                </div>
                <div>
                    <Link to="/account-dash" style={{ color: 'white', textDecoration: 'none', marginRight: '1em', padding: '0.75em', backgroundColor: '#B03052', borderRadius: '4px' }}>
                        <i className="fas fa-home" style={{ marginRight: '5px' }}></i>Home
                    </Link>
                    <Link to="/profile" style={{ color: 'white', textDecoration: 'none', marginRight: '1em', padding: '0.75em', backgroundColor: '#B03052', borderRadius: '4px' }}>
                        <i className="fas fa-user" style={{ marginRight: '5px' }}></i>Profile
                    </Link>
                    <Link to="/history" style={{ color: 'white', textDecoration: 'none', marginRight: '1em', padding: '0.75em', backgroundColor: '#B03052', borderRadius: '4px' }}>
                        <i className="fas fa-history" style={{ marginRight: '5px' }}></i>History
                    </Link>

                    {/* Dropdown for email */}
                    <div className="dropdown" style={{ display: 'inline-block' }}>
                        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                            <i className="fas fa-user-circle" style={{ marginRight: '5px' }}></i>{email ? email : 'Email'}
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <li><button className="dropdown-item" onClick={() => { localStorage.removeItem('authToken'); localStorage.removeItem('email'); window.location.href = '/login'; }}>Logout</button></li>
                        </ul>
                    </div>
                </div>
            </nav>
            {/* Main Content */}
            <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '2em' }}>
                <div className="container" style={{ maxWidth: '800px' }}>
                    <h2 className="text-center mb-4">Safe Email History</h2>
                    <p className="text-center mb-4">Here are your emails that were not detected as phishing.</p>
                    <div className="card shadow-lg">
                        <div className="card-body">
                            {history.length > 0 ? (
                                <ul className="list-group">
                                    {history.map((item, index) => (
                                        <li key={index} className="list-group-item list-group-item-success">
                                            <h5>{item.subject}</h5>
                                            <p>Sender: {item.sender}</p>
                                            <p>Content: {item.content.slice(0, 50)}...</p>
                                            <p>Confidence Score: {item.confidence_score} / 100</p>
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                <p className="text-center">No safe history available.</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer style={{ backgroundColor: '#B03052', padding: '1em', textAlign: 'center', color: 'white' }}>
                Your safety, Our priority
            </footer>
        </div>
    );
}

export default SafeContent;
