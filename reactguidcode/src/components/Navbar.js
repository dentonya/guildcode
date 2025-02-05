import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Navbar extends Component {
    render() {
        return (
            <nav class="navbar navbar-expand-md navbar-light fixed-top bg-light mb-5">
                <div class="container-fluid container">
                    <a class="navbar-brand text-capitalize" href="#">guild code</a>
                    <button
                        class="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarCollapse"
                        aria-controls="navbarCollapse"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarCollapse">
                        <ul class="navbar-nav mr-auto mb-2 mb-md-0">
                            <li class="nav-item">
                                <a class="nav-link" href="#about-us">About</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#services">Services</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#contacts">Contacts</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    };
}

export default Navbar;