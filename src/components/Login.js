import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import { loginUser } from '../api/axiosConfig';
import {  FaSignInAlt, FaUser, FaInfoCircle, FaPhoneAlt } from 'react-icons/fa'; // Social media and navbar icons


function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);
    const [loading, setLoading] = useState(false);  // New state for loading
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);  // Set loading to true on form submission

        const data = { email, password };
    
        try {
            const response = await loginUser(data);
            console.log('Login Response:', response.data);

            if (response?.data?.access) {
                setSuccess('Login successful!');
                setError(null);
            
                // Store the tokens, username, and email in localStorage
                localStorage.setItem('authToken', response.data.access); 
                localStorage.setItem('refreshToken', response.data.refresh); 
                localStorage.setItem('username', response.data.username); 
                localStorage.setItem('email', email);  // Save the email after successful login
            
                // Redirect to AccountDash after successful login
                navigate('/account-dash');
            }
            
        } catch (error) {
            console.error('Login failed:', error);
            setError('Invalid credentials');
            setSuccess(null);
        } finally {
            setLoading(false);  // Set loading to false after request is complete
        }
    };

    return (
        <div style={{ backgroundColor: '#D76C82', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            {/* Navbar */}
            <nav style={{ backgroundColor: '#B03052', padding: '1em', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>
                    <h1 style={{ margin: 0 }}>
                        <i className="fas fa-shield-alt" style={{ marginRight: '10px' }}></i>
                        Email Phishing Detector
                    </h1>
                </Link>
                <div>
                    <Link to="/login" style={{ color: 'white', textDecoration: 'none', marginRight: '1em' }}>
                        <FaSignInAlt style={{ marginRight: '5px' }} /> Login
                    </Link>
                    <Link to="/register" style={{ color: 'white', textDecoration: 'none', marginRight: '1em' }}>
                        <FaUser style={{ marginRight: '5px' }} /> Register
                    </Link>
                    <Link to="/about" style={{ color: 'white', textDecoration: 'none', marginRight: '1em' }}>
                        <FaInfoCircle style={{ marginRight: '5px' }} /> About
                    </Link>
                    <Link to="/contact" style={{ color: 'white', textDecoration: 'none' }}>
                        <FaPhoneAlt style={{ marginRight: '5px' }} /> Contact
                    </Link>
                </div>
            </nav>

            {/* Main content */}
            <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '2em' }}>
                <div style={{ backgroundColor: 'white', padding: '2em', borderRadius: '8px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', width: '100%', maxWidth: '400px' }}>
                    <h2 className="text-center mb-4">Login to Your Account</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label className="form-label">Email:</label>
                            <input
                                type="email"
                                className="form-control"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                style={{ width: '100%', padding: '0.5em', borderRadius: '4px', border: '1px solid #ccc' }}
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Password:</label>
                            <input
                                type="password"
                                className="form-control"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                style={{ width: '100%', padding: '0.5em', borderRadius: '4px', border: '1px solid #ccc' }}
                            />
                        </div>
                        <button
                            type="submit"
                            style={{ width: '100%', padding: '0.75em', backgroundColor: '#B03052', color: 'white', border: 'none', borderRadius: '4px' }}
                            disabled={loading}  // Disable button during loading
                        >
                            {loading ? 'Logging in...' : 'Login'}
                        </button>
                    </form>
                    {error && <p className="text-danger mt-3" style={{ color: 'red' }}>{error}</p>}
                    {success && <p className="text-success mt-3" style={{ color: 'green' }}>{success}</p>}
                    <p className="text-center mt-3">
                        Don't have an account? <Link to="/register" style={{ color: '#B03052' }}>Register here</Link>
                    </p>
                </div>
            </div>

            {/* Footer */}
            <footer style={{ backgroundColor: '#B03052', padding: '1em', textAlign: 'center', color: 'white' }}>
                Your safety, Our priority
            </footer>
        </div>
    );
}

export default Login;
