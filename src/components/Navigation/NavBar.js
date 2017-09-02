import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap'

import { sortCompanies, openModal } from '../actions'

import ExtendedNav from './ExtendedNav'
import './Nav.css'

export class NavBar extends React.Component {
    constructor(props) {
        super(props)

        this.handleClick = this.handleClick.bind(this)
        this.openModalClick = this.openModalClick.bind(this)
    };

    handleClick(e) {
      e.preventDefault()
      const sortOption = e.target.value

      this.props.dispatch(sortCompanies(sortOption))
    };

    openModalClick(e) {
      e.preventDefault()

      this.props.dispatch(openModal())
    };

    render() {
        const { companySelected } = this.props
        const extendedNavButtons = companySelected ? <ExtendedNav /> : ''

        return (
            <Navbar>
                <Navbar.Header className='nav-header'>
                    <Navbar.Brand>
                        <Link to='/' >Target Practice</Link>
                    </Navbar.Brand>
                </Navbar.Header>
                <Nav>
                    <NavItem onClick={this.openModalClick} eventKey={1}>Add New Company</NavItem>
                    <NavDropdown eventKey={2} title="Sort Companies" id="display-by-status">
                        <MenuItem eventKey={2.1}>
                            <button value='companyName'
                                    className='nav-buttons'
                                    onClick={this.handleClick}>
                            Display Alphabetically</button>
                        </MenuItem>
                        <MenuItem eventKey={2.2}>
                            <button value='overallRating'
                                    className='nav-buttons'
                                    onClick={this.handleClick}>
                            Display by Rating: Highest to Lowest</button>
                        </MenuItem>
                    </NavDropdown>
                    {extendedNavButtons}
              </Nav>
          </Navbar>
        );
    };
};

const mapStateToProps = state => ({
    companySelected: state.app.companySelected
})

export default connect(mapStateToProps)(NavBar)
