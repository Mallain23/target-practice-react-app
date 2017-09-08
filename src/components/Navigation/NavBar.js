import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap'

import { sortCompanies } from '../actions/SortActions'
import { openModal, toggleVisibility } from '../actions/ShowHideActions'

import ExtendedNav from './ExtendedNav'
import './Nav.css'

export class NavBar extends React.Component {
    constructor(props) {
        super(props)

        this.handleClick = this.handleClick.bind(this)
        this.openModalClick = this.openModalClick.bind(this)
        this.handleToggle = this.handleToggle.bind(this)
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

    handleToggle() {
        this.props.dispatch(toggleVisibility())
    }
    renderText() {
        const { showSidebar } = this.props
        return showSidebar ? 'Hide Search Bar' : 'Show Search Bar';
    }

    render() {
        const { showExtendedNav } = this.props
        const extendedNavButtons = showExtendedNav ? <ExtendedNav /> : ''

        return (
            <Navbar>
                <Navbar.Header >
                    <Navbar.Brand>
                        <Link to='/' >Target Practice</Link>
                    </Navbar.Brand>
                </Navbar.Header>
                <Nav>
                    <NavItem onClick={this.openModalClick} eventKey={1}>Add New Target</NavItem>
                    <NavDropdown eventKey={2} title="Target Display" id="display-by-status">
                        <MenuItem eventKey={2.1}>
                            <button className='nav-buttons'
                                    onClick={this.handleToggle}>
                            {this.renderText()}</button>
                        </MenuItem>
                        <MenuItem eventKey={2.2}>
                            <button value='companyName'
                                    className='nav-buttons'
                                    onClick={this.handleClick}>
                            Display Alphabetically</button>
                        </MenuItem>
                        <MenuItem eventKey={2.3}>
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
    showExtendedNav: state.app.showExtendedNav,
    showSidebar: state.app.showSidebar

})

export default connect(mapStateToProps)(NavBar)
