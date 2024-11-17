import React, { useState, useEffect } from 'react';
import { detectPhishing } from '../api/axiosConfig';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function PhishingDetector() {
    const [sender, setSender] = useState('');
    const [subject, setSubject] = useState('');
    const [content, setContent] = useState('');
    const [result, setResult] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [email, setEmail] = useState(null); // State for storing the email

    // Fetch email from localStorage on component mount
    useEffect(() => {
        const storedEmail = localStorage.getItem('email');
        if (storedEmail) {
            setEmail(storedEmail);
        }
    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();
    
        const data = {
            sender: sender,
            subject: subject,
            content: content
        };
    
        try {
            setIsLoading(true);
            setError(null);
            const response = await detectPhishing(data);
            console.log('API Response:', response);
            setResult(response.data);
    
            // Store result in localStorage
            const currentHistory = JSON.parse(localStorage.getItem('phishingHistory')) || [];
            currentHistory.push({
                sender: sender,
                subject: subject,
                content: content,
                is_phishing: response.data.is_phishing,
                confidence_score: response.data.confidence_score,
            });
            localStorage.setItem('phishingHistory', JSON.stringify(currentHistory));
        } catch (error) {
            console.error('Error detecting phishing:', error);
            setError('There was an error detecting phishing. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };
    

    // Function to clear the form and result
    const handleClear = () => {
        setSender('');
        setSubject('');
        setContent('');
        setResult(null);
    };

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
                <div className="container" style={{ maxWidth: '600px' }}>
                    <h2 className="text-center mb-4">Phishing Email Detector</h2>
                    <p className="text-center mb-4">Enter the details of the email below to check for potential phishing attempts.</p>
                    <div className="card shadow-lg">
                        <div className="card-body">
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label className="form-label">Sender:</label>
                                    <input 
                                        type="email" 
                                        className="form-control" 
                                        value={sender} 
                                        onChange={(e) => setSender(e.target.value)} 
                                        placeholder="e.g., sender@example.com" 
                                        required 
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Subject:</label>
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        value={subject} 
                                        onChange={(e) => setSubject(e.target.value)} 
                                        placeholder="Email Subject" 
                                        required 
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Content:</label>
                                    <textarea 
                                        className="form-control" 
                                        value={content} 
                                        onChange={(e) => setContent(e.target.value)} 
                                        placeholder="Paste the email content here..." 
                                        required 
                                        rows="4"
                                    />
                                </div>
                                <button type="submit" className="btn btn-primary btn-block">Check Email</button>
                                {/* Clear Button */}
                                <button type="button" className="btn btn-secondary btn-block mt-2" onClick={handleClear}>Clear</button>
                            </form>
                            {isLoading && <p className="text-center mt-3">Loading...</p>}
                            {error && <p className="text-danger text-center mt-3">{error}</p>}

                            <div className="mt-4">
                                <h5 className="text-center">Phishing Result:</h5>
                                <div className={`alert ${result?.is_phishing ? 'alert-danger' : result !== null ? 'alert-success' : ''}`} role="alert">
                                    {result ? (result.is_phishing ? 'Phishing Detected!' : 'Not Phishing') : 'Result Pending...'}
                                </div>
                                <p className="text-center">{result ? result.message : "Initial message: Checking..."}</p>
                                <p className="text-center">Confidence Score: {result ? result.confidence_score : "0"} / 100</p>
                            </div>
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

export default PhishingDetector;
