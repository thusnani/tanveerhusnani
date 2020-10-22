import React, { Component } from 'react';
import logo from '../tanveer_husnani_logo.png';
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
                        <a className="nav-links" href="#Home"> HOME</a>
                    </li>
                    <li>
                        <a className="nav-links" href="#AboutMe"> ABOUT ME</a>
                    </li>
                    <li>
                        <a className="nav-links" href="#Skills"> SKILLS</a>
                    </li>
                    <li>
                        <a className="nav-links" href="#MyWork"> MY WORK</a>
                    </li>
                    <li>
                        <a className="nav-links" href="#Home"> CONTACT</a>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default NavBar

