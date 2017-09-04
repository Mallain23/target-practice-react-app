import React from 'react'
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap'

export default class ExtendedNav extends React.Component {

    render() {
          return(
            <Nav>
                <NavDropdown eventKey={3} title='Company Profile' id='company-profoile'>
                    <MenuItem eventKey={3.1}>Company Overview</MenuItem>
                    <MenuItem eventKey={3.2}>Management Directory</MenuItem>
                </NavDropdown>
                <NavItem eventKey={4}>Financial Matters</NavItem>
                <NavItem eventKey={5}>Legal Matters</NavItem>
                <NavDropdown eventKey={6} title="Benefits" id="display-by-status">
                    <MenuItem eventKey={7.1}>Intellectual Property</MenuItem>
                    <MenuItem eventKey={7.2}>Technology</MenuItem>
                    <MenuItem eventKey={7.3}>Other Benefits</MenuItem>
                </NavDropdown>
                <NavItem eventKey={8}>Final Assessment</NavItem>
            </Nav>
        );
    };
};
