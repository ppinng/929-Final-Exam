import React, { Component } from 'react';
import { Nav, Navbar, NavbarBrand, NavItem, NavLink} from 'reactstrap';
import {Link} from "react-router-dom";

class Header extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar dark expand="md">
                    <div className="d-flex container">

                        <NavbarBrand className="mr-auto" href="/"><img src='./assests/images/logo2bg.png' height="40" width="40" alt='Moonlight' /></NavbarBrand>

                        <Nav navbar className="headercolor">
                            <NavItem>
                                <Link to='/home'><NavLink className="nav-link" to='/home'><span className="fa fa-home fa-lg"></span> Home</NavLink></Link>
                            </NavItem>
                            <NavItem>
                                <Link to='/aboutme'><NavLink className="nav-link" to='/aboutme'><span className="fa fa-info fa-lg"></span> About Me</NavLink></Link>
                            </NavItem>
                            <NavItem>
                                <Link to='/Photo'><NavLink className="nav-link" to='/Photo'><span className="fa fa-list fa-lg"></span> Photo Gallery</NavLink></Link>
                            </NavItem>

                        </Nav>

                    </div>
                </Navbar>
            </React.Fragment>
        );

    }
}
export default Header;