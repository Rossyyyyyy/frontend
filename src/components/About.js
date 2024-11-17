import React from 'react';
import { FaFacebook, FaInstagram, FaEnvelope, FaSignInAlt, FaUser, FaInfoCircle, FaPhoneAlt } from 'react-icons/fa'; // Social media and navbar icons
import { Link } from 'react-router-dom'; // Don't forget to import Link

function About() {
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

            <h1 style={{ color: '#B03052', textAlign: 'center' }}>About the System</h1>
            <p style={{ textAlign: 'center', fontSize: '1.2em', maxWidth: '800px', margin: 'auto' }}>
                This system is designed to detect phishing emails and secure your browsing data. It prioritizes your safety and privacy.
            </p>

            <h2 style={{ color: '#B03052', textAlign: 'center' }}>Meet the Team</h2>

            <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '2em', marginBottom: '2em' }}>
                {/* Team Member 1 */}
                <div style={{ textAlign: 'center' }}>
                    <img
                        src="/roschel.svg" // Replace with the correct image path
                        alt="Roschel Mae E. Ano-Os"
                        style={{
                            width: '150px',
                            height: '150px',
                            borderRadius: '50%',
                            objectFit: 'cover',
                            marginBottom: '1em',
                        }}
                    />
                    <h3>Roschel Mae E. Ano-Os</h3>
                    <p>Software Developer/Programmer</p>
                    <div>
                        <a href="https://facebook.com" style={{ marginRight: '1em' }}>
                            <FaFacebook size={24} />
                        </a>
                        <a href="https://instagram.com" style={{ marginRight: '1em' }}>
                            <FaInstagram size={24} />
                        </a>
                        <a href="mailto:roschel@example.com">
                            <FaEnvelope size={24} />
                        </a>
                    </div>
                </div>

                {/* Team Member 2 */}
                <div style={{ textAlign: 'center' }}>
                    <img
                        src="/hariette.svg" // Replace with the correct image path
                        alt="Harriete Seppilo"
                        style={{
                            width: '150px',
                            height: '150px',
                            borderRadius: '50%',
                            objectFit: 'cover',
                            marginBottom: '1em',
                        }}
                    />
                    <h3>Harriete Seppilo</h3>
                    <p>System Administrator/DevOps Engineer</p>
                    <div>
                        <a href="https://facebook.com" style={{ marginRight: '1em' }}>
                            <FaFacebook size={24} />
                        </a>
                        <a href="https://instagram.com" style={{ marginRight: '1em' }}>
                            <FaInstagram size={24} />
                        </a>
                        <a href="mailto:harriete@example.com">
                            <FaEnvelope size={24} />
                        </a>
                    </div>
                </div>

                {/* Team Member 3 */}
                <div style={{ textAlign: 'center' }}>
                    <img
                        src="/daniella.svg" // Replace with the correct image path
                        alt="Daniela Dayag"
                        style={{
                            width: '150px',
                            height: '150px',
                            borderRadius: '50%',
                            objectFit: 'cover',
                            marginBottom: '1em',
                        }}
                    />
                    <h3>Daniela Dayag</h3>
                    <p>Documentation</p>
                    <div>
                        <a href="https://facebook.com" style={{ marginRight: '1em' }}>
                            <FaFacebook size={24} />
                        </a>
                        <a href="https://instagram.com" style={{ marginRight: '1em' }}>
                            <FaInstagram size={24} />
                        </a>
                        <a href="mailto:daniela@example.com">
                            <FaEnvelope size={24} />
                        </a>
                    </div>
                </div>

                {/* Team Member 4 */}
                <div style={{ textAlign: 'center' }}>
                    <img
                        src="/rana.svg" // Replace with the correct image path
                        alt="John Riell Rana"
                        style={{
                            width: '150px',
                            height: '150px',
                            borderRadius: '50%',
                            objectFit: 'cover',
                            marginBottom: '1em',
                        }}
                    />
                    <h3>John Riell Rana</h3>
                    <p>Documentation</p>
                    <div>
                        <a href="https://facebook.com" style={{ marginRight: '1em' }}>
                            <FaFacebook size={24} />
                        </a>
                        <a href="https://instagram.com" style={{ marginRight: '1em' }}>
                            <FaInstagram size={24} />
                        </a>
                        <a href="mailto:john@example.com">
                            <FaEnvelope size={24} />
                        </a>
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

export default About;
