import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer">

            <div className="social-icon">
            <i class="fab fa-facebook-square"></i>
            <i class="fab fa-instagram-square"></i>
            <i class="fab fa-linkedin-in"></i>
            </div>

            <div>
                <h5>24/7 Online Support</h5>
                <h5>Terms of use Privacy Policy</h5>
                <p className="text-secondary">Copyright &copy; Programming Academy
 2021</p>
            </div>
          
        </div>
    );
};

export default Footer;