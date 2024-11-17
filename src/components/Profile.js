import React, { useEffect, useState } from 'react'; 
import axios from 'axios';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function Profile() {
    const [userData, setUserData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const token = localStorage.getItem('authToken');
                const email = localStorage.getItem('email');

                if (!token || !email) {
                    throw new Error("User is not logged in.");
                }

                const config = {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                };

                const response = await axios.get(`http://localhost:8000/users/${email}`, config);
                console.log(response.data); // Check structure of the response data
                setUserData(response.data);
            } catch (error) {
                console.error('Error fetching user data:', error);
                setError('Failed to load user data. Please try again.');
            }
        };

        fetchUserData();
    }, []);

    return (
        <div style={{ backgroundColor: '#D76C82', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <nav style={{ backgroundColor: '#B03052', padding: '1em', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <i className="fas fa-shield-alt" style={{ color: 'white', fontSize: '2em', marginRight: '10px' }}></i>
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
                    <div className="dropdown" style={{ display: 'inline-block' }}>
                        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                            <i className="fas fa-user-circle" style={{ marginRight: '5px' }}></i>{userData ? userData.email : 'Loading...'}
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <li>
                                <button className="dropdown-item" onClick={() => {
                                    localStorage.removeItem('authToken');
                                    localStorage.removeItem('email');
                                    window.location.href = '/login';
                                }}>
                                    Logout
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '2em' }}>
                <div className="container" style={{ maxWidth: '600px' }}>
                    <h2 className="text-center mb-4" style={{ fontSize: '2rem', fontWeight: 'bold' }}>User Details</h2>
                    {error && <p className="text-danger text-center">{error}</p>}
                    {userData ? (
                        <div className="card shadow-lg" style={{ borderRadius: '15px', padding: '2em', backgroundColor: '#fff', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
                            <div className="card-body text-center">
                                <div style={{ marginBottom: '1em' }}>
                                    <img 
                                        src={`https://www.gravatar.com/avatar/${userData.email}`} 
                                        alt="Avatar" 
                                        style={{ width: '100px', height: '100px', borderRadius: '50%', border: '2px solid #B03052' }} 
                                    />
                                </div>
                                <p><strong>Username:</strong> {userData.username}</p>
                                <p><strong>Email:</strong> {userData.email}</p>
                                <div className="progress" style={{ height: '10px', marginTop: '2em' }}>
                                    <div className="progress-bar" role="progressbar" style={{ width: '80%' }} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <p className="text-center">Loading user data...</p>
                    )}
                </div>
            </div>

            <footer style={{ backgroundColor: '#B03052', padding: '1em', textAlign: 'center', color: 'white' }}>
                Your safety, Our priority
            </footer>
        </div>
    );
}

export default Profile;
