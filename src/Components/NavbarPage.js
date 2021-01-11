import React, { Component } from 'react'
import logo from '../websiteback.png';
import { FaAlignRight } from 'react-icons/fa';


export default class NavBarPage extends Component {
    state = {
        isOpen: false
    }

    handleToggle = () => {
        this.setState({ isOpen: !this.state.isOpen })
    };

    render() {
        return (
            <nav className="navbar">
                <div className="nav-center">
                    <div className="nav-header">
                        <img className="navlogo" src={logo} alt="Beach Resort" />
                        <button type="button" className="nav-btn" onClick={this.handleToggle}>
                            <FaAlignRight className="nav-icon" />
                        </button>
                    </div>
                </div>
            </nav>
        )
    }
}
