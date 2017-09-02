import React from 'react'
import { connect } from 'react-redux'
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap'

import './Nav.css'
import ExtendedNav from './ExtendedNav'

export class NavBar extends React.Component {

    render() {
        const { companySelected } = this.props
        const extendedNavButtons = companySelected ? <ExtendedNav /> : ''

        return (
            <Navbar>
                <Navbar.Header className='nav-header'>
                    <Navbar.Brand>
                        <a >Target Practice</a>
                    </Navbar.Brand>
                </Navbar.Header>
                <Nav>
                    <NavItem eventKey={1}>Add New Company</NavItem>
                    <NavDropdown eventKey={2} title="Companies by Status" id="display-by-status">
                        <MenuItem eventKey={2.1}>Display Companies Under Review</MenuItem>
                        <MenuItem eventKey={2.2}>Display Pending Companies</MenuItem>
                        <MenuItem eventKey={2.3}>Display Approved Companies</MenuItem>
                        <MenuItem eventKey={2.3}>Display Denied Companies</MenuItem>
                    </NavDropdown>
                    {extendedNavButtons}
              </Nav>
          </Navbar>
        );
    };
};

const mapStateToProps = state => ({
    companySelected: state.companySelected
})

export default connect(mapStateToProps)(NavBar)
