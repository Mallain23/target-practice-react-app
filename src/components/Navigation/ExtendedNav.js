import React from 'react'
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap'

export default class ExtendedNav extends React.Component {

    render() {
          return(
            <Nav>
                <NavItem eventKey={3}>Company Profile</NavItem>
                <NavItem eventKey={4}>Financial Matters</NavItem>
                <NavDropdown eventKey={5} title="Benefits" id="display-by-status">
                    <MenuItem eventKey={5.1}>Intellectual Property</MenuItem>
                    <MenuItem eventKey={5.2}>Technology</MenuItem>
                    <MenuItem eventKey={5.3}>ther Benefits</MenuItem>
                </NavDropdown>
                <NavItem eventKey={6}>Legal Matters</NavItem>
                <NavItem eventKey={6}>Management Directory</NavItem>
                <NavItem eventKey={6}>Final Assessment</NavItem>
            </Nav>
        );
    };
};
