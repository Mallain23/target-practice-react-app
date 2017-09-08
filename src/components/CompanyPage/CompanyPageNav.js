import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap'

import { removeCompanyFromDatabase} from '../actions'
import { openModal, toggleVisibility } from '../actions/ShowHideActions'

import CompanyPageButtons from './CompanyPageButtons'


export class ComapnyPageNav extends React.Component {
    constructor(props) {
        super(props)

    this.handleRemoveCompanyClick = this.handleRemoveCompanyClick.bind(this)
    };

    handleRemoveCompanyClick() {

        const { companyName } = this.props.selectedCompany
        this.props.dispatch(removeCompanyFromDatabase(companyName))
        this.props.history.push('/')
    };
    render() {
      const { selectedPage } = this.props
      const { companyName } = this.props.selectedCompany
        return (

            <Navbar>
                <Navbar.Header >
                    <Navbar.Brand>
                      {companyName}
                    </Navbar.Brand>
                </Navbar.Header>
                <Nav>
                    <NavItem onClick={this.handleRemoveCompanyClick} > Delete Company </NavItem>
              </Nav>
          </Navbar>
        );
    };
};

const mapStateToProps = state => {
    const { selectedCompany, selectedPage } = state.app

    return {
        selectedCompany,
        selectedPage
    };

};

export default connect(mapStateToProps)(ComapnyPageNav)
