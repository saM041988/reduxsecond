import React from 'react';
import { FaFacebookF, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () =>{

    return(
        <>
            <footer className="footer">
                <div className="container">
                    <div className="footer-top py-4">
                    <h3>First Blog.</h3>
                    <div className="social-icons-footer">
                        <a href="#">
                        <FaFacebookF />
                        </a>
                        <a href="#">
                        <FaTwitter />
                        </a>
                        <a href="#">
                        <FaYoutube />
                        </a>
                        <a href="#">
                        <i className="fa fa-linkedin" aria-hidden="true" />
                        </a>
                    </div>
                    </div>
                    <div className="footer-bottom">
                    <a>copywrite@2022 | Made by Me.</a>
                    </div>
                </div>
                </footer>
        </>
    );
}

export default Footer;