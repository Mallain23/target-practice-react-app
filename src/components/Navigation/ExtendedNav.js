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

        const selectedPage = (e.target.value)
        this.props.dispatch(updateCurrentSelectedPage(selectedPage))
    };

    render() {
          return(
            <Nav>

                <NavDropdown eventKey={3} title='Company Profile' id='company-profoile'>
                      <MenuItem eventKey={3.1}>
                          <button className='nav-buttons'
                                  value='Company Overview'
                                  onClick={this.handleClick}>
                                  Company Overview </button>
                        </MenuItem>
                        <MenuItem eventKey={3.2}>
                            <button className='nav-buttons'
                                    value='Company Directory'
                                    onClick={this.handleClick}>
                                    Company Directory </button>
                          </MenuItem>
                          <MenuItem eventKey={3.2}>
                              <button className='nav-buttons'
                                      value='Final Assessment'
                                      onClick={this.handleClick}>
                                      Final Assessment </button>
                          </MenuItem>
                </NavDropdown>
                <NavDropdown eventKey={4} title='Financial Matters' id='financial-matters'>
                    <MenuItem eventKey={4.1}>
                        <button className='nav-buttons'
                                value='Financial Page'
                                onClick={this.handleClick}>
                                Company Assets </button>
                    </MenuItem>
                    <MenuItem eventKey={4.2}>
                    <button className='nav-buttons'
                            value='Financial Page'
                            onClick={this.handleClick}>
                            Company Liabilities </button>
                    </MenuItem>
                    <MenuItem eventKey={4.3}>
                    <button className='nav-buttons'
                            value='Financial Page'
                            onClick={this.handleClick}>
                            Financial Reports </button>
                    </MenuItem>
                    <MenuItem eventKey={4.4}>
                    <button className='nav-buttons'
                            value='Financial Page'
                            onClick={this.handleClick}>
                            Business Margins </button>
                    </MenuItem>
                    <MenuItem eventKey={4.5}>
                    <button className='nav-buttons'
                            value='Financial Page'
                            onClick={this.handleClick}>
                            Financial Assessment </button>
                    </MenuItem>
                </NavDropdown>
                <NavDropdown eventKey={5} title='Legal Matters' id='legal-matters'>
                    <NavItem eventKey={5.1}>
                        <button className='nav-buttons'
                                value='Legal Page'
                                onClick={this.handleClick}>
                                Legal Concerns</button>
                    </NavItem>
                    <NavItem eventKey={5.1}>
                        <button className='nav-buttons'
                                value='Legal Page'
                                onClick={this.handleClick}>
                                Legal Assessment</button>
                    </NavItem>
                </NavDropdown>
                <NavDropdown eventKey={6} title="Benefits" id="display-by-status">
                    <MenuItem eventKey={6.1}>
                        <button className='nav-buttons'
                                value='Benefits Page'
                                onClick={this.handleClick}>
                                Intellectual Property</button>
                    </MenuItem>
                    <MenuItem eventKey={6.2}>
                        <button className='nav-buttons'
                                value='Benefits Page'
                                onClick={this.handleClick}>
                                Technology </button>
                    </MenuItem>
                    <MenuItem eventKey={6.3}>
                        <button className='nav-buttons'
                                value='Benefits Page'
                                onClick={this.handleClick}>
                                Other Benefits</button>
                    </MenuItem>
                    <MenuItem eventKey={6.3}>
                        <button className='nav-buttons'
                                value='Benefits Page'
                                onClick={this.handleClick}>
                                Assessment of Benefits</button>
                    </MenuItem>
                </NavDropdown>
            </Nav>
        );
    };
};

export default connect()(ExtendedNav)
