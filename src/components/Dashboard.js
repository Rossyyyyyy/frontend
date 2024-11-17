import React from 'react';
import { Link } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaSignInAlt, FaUser, FaInfoCircle, FaPhoneAlt } from 'react-icons/fa'; // Social media and navbar icons

function Dashboard() {
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

            {/* Carousel */}
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="/pic1.jpg"
                        alt="Stay Safe, Stay Secure: Our system ensures your privacy by protecting your session data."
                        style={{ height: '400px', objectFit: 'cover' }}
                    />
                    <Carousel.Caption>
                        <h3>Stay Safe, Stay Secure</h3>
                        <p>Our system ensures your privacy by protecting your session data.</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="/pic2.jpg"
                        alt="Your Data is Our Priority: Experience secure browsing with automatic session data removal."
                        style={{ height: '400px', objectFit: 'cover' }}
                    />
                    <Carousel.Caption>
                        <h3>Your Data is Our Priority</h3>
                        <p>Experience secure browsing with automatic session data removal.</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="/pic4.jpg"
                        alt="Trust Our System: We ensure that no one can access your personal information once you log out."
                        style={{ height: '400px', objectFit: 'cover' }}
                    />
                    <Carousel.Caption>
                        <h3>Trust Our System</h3>
                        <p>We ensure that no one can access your personal information once you log out.</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="/pic6.jpg"
                        alt="Your Privacy, Our Promise: Logout and relax, knowing your browsing history is cleared for safety."
                        style={{ height: '400px', objectFit: 'cover' }}
                    />
                    <Carousel.Caption>
                        <h3>Your Privacy, Our Promise</h3>
                        <p>Logout and relax, knowing your browsing history is cleared for safety.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            {/* Main content with the same background color as the carousel */}
            <div style={{ backgroundColor: '#D76C82', flex: 1, padding: '2em', textAlign: 'center' }}>
                <h2 style={{ color: '#B03052' }}>Why Your History May Not Appear After Logging Back In</h2>
                <p style={{ fontSize: '1.2em', maxWidth: '800px', margin: 'auto', lineHeight: '1.6' }}>
                    We understand that seeing your previous history is important, but for your security and privacy, we have implemented certain measures to protect your data. Here’s why your history might not be available right away when you log back in:
                </p>

                {/* Video Section */}
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2em' }}>
                    <video
                        width="100%"  // Adjust width to 100% of its container
                        style={{
                            maxWidth: '560px', // Limit the max width to 560px (16:9 aspect ratio for 100% width)
                            height: 'auto',  // Auto-adjust height based on width for 16:9 ratio
                            borderRadius: '8px',
                            boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                            margin: '0 auto', // Center the video
                        }}
                        autoPlay
                        muted
                        loop
                    >
                        <source src="/vid1.mp4" type="video/mp4" /> {/* Replace with correct video source */}
                        Your browser does not support the video tag.
                    </video>
                </div>

                <h3>Data is Deleted for Your Safety</h3>
                <p>After you log out, your session is securely closed, and certain data, like your history, is automatically cleared. This includes any information that might have been stored temporarily in your session, such as recent activities or previous browsing history. This is done to ensure that no one else can access your personal data once you have logged out.</p>

                <h3>Why Does This Happen?</h3>
                <p>This security measure is in place to protect your personal information. If we were to keep your history accessible after logout, it could potentially be accessed by others who might use the same device. By deleting this data, we prevent unauthorized access to sensitive information and maintain the integrity of your privacy.</p>

                <h3>What Happens When You Log Back In?</h3>
                <p>Once you log back in, you will need to manually retrieve your history, as the session data has been cleared. If you’ve logged out previously, the system does not remember your last session for security reasons. This means that even though you’ve logged back in, your history will not be automatically restored until the data is fetched again, based on the latest session.</p>

                {/* Collage Section */}
                <div className="collage">
                    <div className="row">
                        <div className="col">
                            <img
                                src="/sec1.jpg"
                                alt="A secure session history section"
                                style={{ width: '100%', maxWidth: '250px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}
                            />
                        </div>
                        <div className="col">
                            <img
                                src="/sec2.jpg"
                                alt="Privacy and session data protection"
                                style={{ width: '100%', maxWidth: '250px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}
                            />
                        </div>
                        <div className="col">
                            <img
                                src="/sec3.jpg"
                                alt="An illustration of secure login"
                                style={{ width: '100%', maxWidth: '250px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}
                            />
                        </div>
                        <div className="col">
                            <img
                                src="/sec4.jpg"
                                alt="A representation of automatic session data deletion"
                                style={{ width: '100%', maxWidth: '250px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}
                            />
                        </div>
                    </div>
                </div>

                <h3>Why This is Important for You</h3>
                <p>We prioritize your safety. By deleting session data after you log out, we ensure that your private information is never left exposed. This measure helps keep your browsing history, account details, and any personal preferences safe from unauthorized access.</p>

                <p>Although this means your history is not immediately available after you log back in, rest assured that your data security is at the forefront of our design. Your information is protected at all times, and we hope this gives you peace of mind when using our system.</p>
            </div>

            {/* Footer */}
            <footer style={{ backgroundColor: '#B03052', color: 'white', textAlign: 'center', padding: '1em' }}>
                <p>© 2024 Email Phishing Detection System | All Rights Reserved</p>
            </footer>
        </div>
    );
}

export default Dashboard;
