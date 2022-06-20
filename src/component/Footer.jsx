import React from 'react';
import '../css/footer.css';

const logo = require('../images/logo.png');
function Footer() {
    return (
        <footer>
            <div className="container" >
                <img src={logo} alt='logo'></img>
                <div className='textt' >
                    <h2>Company</h2>
                    <ul>
                        <li>About</li>
                        <li>Information About Company</li> 
                        <li>Our Team</li>
                        <li>Support</li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}
export default Footer;