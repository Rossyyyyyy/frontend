import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function AccountDash() {
    const navigate = useNavigate();
    const [email, setEmail] = useState(null);
    const storedEmail = localStorage.getItem('email');

    useEffect(() => {
        if (!localStorage.getItem('authToken')) {
            navigate('/login');
        } else {
            if (storedEmail) {
                setEmail(storedEmail);
            } else {
                const fetchEmail = async () => {
                    try {
                        const response = await fetch(`http://localhost:5001/api/get-email`, {
                            method: 'GET',
                            headers: {
                                'Authorization': `Bearer ${localStorage.getItem('authToken')}`,
                                'Content-Type': 'application/json',
                            },
                        });

                        const data = await response.json();
                        if (response.ok) {
                            setEmail(data.email);
                            localStorage.setItem('email', data.email);
                        } else {
                            console.error('Failed to fetch email:', data);
                        }
                    } catch (error) {
                        console.error('Error fetching email:', error);
                    }
                };

                fetchEmail();
            }
        }
    }, [navigate, storedEmail]);

    const handleLogout = () => {
        localStorage.removeItem('authToken');
        localStorage.removeItem('email');
        navigate('/login');
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
                            <i className="fas fa-user-circle" style={{ marginRight: '5px' }}></i>{email ? email : 'Loading...'}
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <li><button className="dropdown-item" onClick={handleLogout}>Logout</button></li>
                        </ul>
                    </div>
                </div>
            </nav>

            {/* Main Content */}
            <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '2em' }}>
                <div className="container">
                    <div className="row justify-content-center"> {/* Centering the cards */}
                        <div className="col-md-3">
                            <Link to="/detect" style={{ textDecoration: 'none' }}>
                                <div className="card-counter primary" style={{ cursor: 'pointer' }}>
                                    <i className="fa fa-code-fork"></i>
                                    <span className="count-name">Detect Content</span>
                                </div>
                            </Link>
                        </div>
                        <div className="col-md-3">
                            <Link to="/safe" style={{ textDecoration: 'none' }}>
                                <div className="card-counter success">
                                    <i className="fa fa-check"></i> {/* Icon only, no count */}
                                    <span className="count-name">Safe Content</span>
                                </div>
                            </Link>
                        </div>
                        <div className="col-md-3">
                            <Link to="/not-safe" style={{ textDecoration: 'none' }}>
                                <div className="card-counter danger">
                                    <i className="fa fa-exclamation-triangle"></i> {/* Warning icon */}
                                    <span className="count-name">Not Safe Content</span>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer style={{ backgroundColor: '#B03052', padding: '1em', textAlign: 'center', color: 'white' }}>
                Your safety, Our priority
            </footer>

            {/* CSS for card counters */}
            <style>{`
                .card-counter {
                    box-shadow: 2px 2px 10px #DADADA;
                    margin: 5px;
                    padding: 20px 10px;
                    background-color: #fff;
                    height: 100px;
                    border-radius: 5px;
                    transition: .3s linear all;
                    text-align: center;
                    position: relative;
                }
                .card-counter:hover {
                    box-shadow: 4px 4px 20px #DADADA;
                    transition: .3s linear all;
                }
                .card-counter.primary {
                    background-color: #007bff;
                    color: #FFF;
                }
                .card-counter.success {
                    background-color: #66bb6a;
                    color: #FFF;
                }
                .card-counter.danger {
                    background-color: #ef5350;
                    color: #FFF;
                }
                .card-counter i {
                    font-size: 5em;
                    opacity: 0.2;
                }
                .card-counter .count-name {
                    position: absolute;
                    right: 35px;
                    top: 65px;
                    font-style: italic;
                    text-transform: capitalize;
                    opacity: 0.5;
                    font-size: 18px;
                }
            `}</style>
        </div>
    );
}

export default AccountDash;
