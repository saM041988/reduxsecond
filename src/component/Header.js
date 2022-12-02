import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import { BiPhoneCall, BiEnvelope } from 'react-icons/bi';

const Header = () =>{

    
    return(
         <>
            <header>
                <div className="header-top">
                    <div className="container">
                    <div className="row">
                        <div className="col-md-6 top-left">
                        <a href="#">
                            <BiPhoneCall /> 000-000-0000
                        </a>
                        <a href="#">
                        <BiEnvelope /> blog@gmail.com
                        </a>
                        </div>
                        <div className="col-md-6 top-right">
                        <a href="#">
                            <i className="fa fa-facebook" aria-hidden="true" />
                        </a>
                        <a href="#">
                            <i className="fa fa-twitter" aria-hidden="true" />
                        </a>
                        <a href="#">
                            <i className="fa fa-instagram" aria-hidden="true" />
                        </a>
                        <a href="#">
                            <i className="fa fa-linkedin" aria-hidden="true" />
                        </a>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="header-bottom">
                    <nav className="navbar navbar-expand-lg navbar-light">
                    <div className="container">
                        <a className="navbar-brand" href="#">
                        Blog.
                        </a>
                        <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                        >
                        <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                            <Link className="nav-link" to="/">
                                Home
                            </Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link" to="/">
                                About
                            </Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link" to="/addEditBlog">
                                Add Blog
                            </Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link" to="/blog">
                                Blog
                            </Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link" to="/blogDetails">
                                Single Blog
                            </Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link" to="/">
                                News
                            </Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link" to="/contact">
                                Contact Us
                            </Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link" to="/other">
                                Other
                            </Link>
                            </li>
                        </ul>
                        </div>
                    </div>
                    </nav>
                </div>
                </header>

         </>
    );
}

export default Header;