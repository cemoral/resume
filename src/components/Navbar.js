import React from "react";
import {Navbar, Nav} from 'react-bootstrap';
import {Route, HashRouter, NavLink} from "react-router-dom";
import Contact from "./Contact";

function MNavbar() {

    return (
        <HashRouter>
            <Navbar expand="md">
                {/*<Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>*/}
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="m-auto" style={{fontSize: '25px'}}>
                        <Nav.Link><NavLink style={{color: 'black'}} to="/about">About</NavLink></Nav.Link>
                        <Nav.Link><NavLink style={{color: 'black'}} to="/work">Work</NavLink></Nav.Link>
                        <Nav.Link><NavLink style={{color: 'black'}} to="/background">Background</NavLink></Nav.Link>
                        <Nav.Link><NavLink style={{color: 'black'}} to="/contact">Contact</NavLink></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <div className="content">
                <Route path="/about">About</Route>
                <Route path="/work">Work</Route>
                <Route path="/background">Background</Route>
                <Route path="/contact" component={Contact}/>
            </div>
        </HashRouter>
    )
}

export default MNavbar;
