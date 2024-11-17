import React from 'react';
import { FaFacebook, FaInstagram, FaEnvelope, FaSignInAlt, FaUser, FaInfoCircle, FaPhoneAlt } from 'react-icons/fa'; // Social media and navbar icons
import { Link } from 'react-router-dom';

function Contact() {
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
            <div style={{ textAlign: 'center', padding: '2em 0', color: '#B03052' }}>
                <h1>Contact Us</h1>
                <p style={{ fontSize: '1.2em', maxWidth: '800px', margin: 'auto' }}>
                    We value your feedback! If you have any questions, suggestions, or concerns, feel free to reach out to us.
                    You can contact us directly through the form below or email us at <a href="mailto:roschelmaeanoos@gmail.com" style={{ color: '#B03052', textDecoration: 'underline' }}>roschelmaeanoos@gmail.com</a>.
                </p>
            </div>

            {/* Roschel's Profile & Feedback Form */}
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', textAlign: 'center', padding: '2em' }}>
                <img 
                    src="/roschel.svg" 
                    alt="Roschel Mae Ano-Os" 
                    style={{ width: '150px', height: '150px', borderRadius: '50%', border: '5px solid #B03052', marginBottom: '1.5em' }}
                />
                <h2 style={{ color: '#B03052' }}>Contact Roschel Mae Ano-Os</h2>
                <p style={{ fontSize: '1.1em', marginBottom: '1.5em' }}>
                    As the programmer of this system, I'm always eager to hear from users! Whether you have suggestions, improvements, or general comments about the website, feel free to send me a message below. Your feedback helps make the system better!
                </p>

                <h3 style={{ color: '#B03052' }}>Send Us Your Suggestions</h3>
                <form 
                    style={{
                        display: 'inline-block', 
                        textAlign: 'left', 
                        backgroundColor: 'white', 
                        padding: '1.5em', 
                        borderRadius: '8px', 
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', 
                        width: '100%', 
                        maxWidth: '600px'
                    }}
                    action="mailto:roschelmaeanoos@gmail.com" method="post" enctype="text/plain"
                >
                    <label style={{ display: 'block', marginBottom: '0.5em' }} htmlFor="name">Your Name:</label>
                    <input type="text" id="name" name="name" placeholder="Your Name" style={{ width: '100%', padding: '0.8em', marginBottom: '1em', borderRadius: '4px', border: '1px solid #ddd' }} required />

                    <label style={{ display: 'block', marginBottom: '0.5em' }} htmlFor="email">Your Email:</label>
                    <input type="email" id="email" name="email" placeholder="Your Email" style={{ width: '100%', padding: '0.8em', marginBottom: '1em', borderRadius: '4px', border: '1px solid #ddd' }} required />

                    <label style={{ display: 'block', marginBottom: '0.5em' }} htmlFor="message">Your Message:</label>
                    <textarea id="message" name="message" placeholder="Enter your suggestion or feedback here..." style={{ width: '100%', padding: '0.8em', height: '150px', borderRadius: '4px', marginBottom: '1em', border: '1px solid #ddd' }} required />

                    <button type="submit" style={{ backgroundColor: '#B03052', color: 'white', padding: '1em 2em', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
                        Send Message
                    </button>
                </form>
            </div>

            {/* Social Media Links */}
            <div style={{ textAlign: 'center', marginTop: '3em' }}>
                <h3 style={{ color: '#B03052' }}>Follow Us</h3>
                <p>Stay connected with us on social media for updates, news, and more!</p>
                <a href="https://facebook.com" style={{ margin: '0 1em' }}>
                    <FaFacebook size={30} />
                </a>
                <a href="https://instagram.com" style={{ margin: '0 1em' }}>
                    <FaInstagram size={30} />
                </a>
                <a href="mailto:roschelmaeanoos@gmail.com" style={{ margin: '0 1em' }}>
                    <FaEnvelope size={30} />
                </a>
            </div>

            {/* Footer */}
            <footer style={{ backgroundColor: '#B03052', padding: '1em', textAlign: 'center', color: 'white', marginTop: 'auto' }}>
                Your safety, Our priority
            </footer>
        </div>
    );
}

export default Contact;
