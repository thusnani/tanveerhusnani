import React, { Component } from 'react';
import logo from './tanveer_husnani_logo.png';
import './NavBar.css';

class NavBar extends Component {

    state = { clicked: false }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    componentDidMount() {

    }

    render() {
        return (
            <nav className="navbar-container">
                <img src={logo} className="navbar-app-logo" alt="logo" />
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    <li>
                        <a className="nav-links" href="#Home"> Home</a>
                    </li>
                    <li>
                        <a className="nav-links" href="#AboutMe"> About Me</a>
                    </li>
                    <li>
                        <a className="nav-links" href="#Skills"> Skills</a>
                    </li>
                    <li>
                        <a className="nav-links" href="#MyWork"> My Work</a>
                    </li>
                    <li>
                        <a className="nav-links" href="#Home"> Contact</a>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default NavBar

