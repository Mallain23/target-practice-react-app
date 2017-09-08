import React from 'react'
import { Navbar, Nav, NavItem, NavDropdown, MenuItem  } from 'react-bootstrap'
import { connect } from 'react-redux'

import { updateCurrentSelectedPage } from '../actions'

import './Nav.css'

export class ExtendedNav extends React.Component {
    constructor(props) {
        super(props)

        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(e) {
        e.preventDefault(e)

        const selectedPage = e.target.value
        this.props.dispatch(updateCurrentSelectedPage(selectedPage))
    };

    render() {
          return(
            <Nav>


            </Nav>
        );
    };
};

export default connect()(ExtendedNav)
