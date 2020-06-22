import React, { Component } from 'react';
import { Navbar, NavbarBrand, Jumbotron, Nav, NavbarToggler, Collapse, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';


class Header extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isNavOpen: false,
        }
        this.toggleNav = this.toggleNav.bind(this);
    }

    toggleNav() {
        this.setState({ isNavOpen: !this.state.isNavOpen });
    }

    render() {
        return (
            <>
                <Navbar dark expand="md" className='bg-primary'>
                    <div className="container">
                        <NavbarToggler onClick={this.toggleNav} />
                        <NavbarBrand className='mr-auto' href='/analogy'>
                            NLP Projects
                        </NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className="nav-link" to="/analogy">
                                        Analogies
                                    </NavLink>
                                </NavItem>
                            </Nav>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className="nav-link" to='/asl'>
                                        ASL Translator
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
                <Jumbotron>
                    <div className="container">
                        <div className="row row-header">
                            <div className='col-12 col-sm-8'>
                                <h1>NLP Projects</h1>
                                <p>This is a react app for serving independent NLP projects inspired by Stanford's NLP course CS224n</p>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
            </>
        );
    }
}

export default Header;