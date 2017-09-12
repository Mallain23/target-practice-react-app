import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

import { removeTargetFromDatabase, updateCurrentSelectedPage } from '../actions';
import { openModal, toggleVisibility } from '../actions/ShowHideActions';
import { updateTarget } from '../actions/EditTarget';

import CompanyPageButtons from './CompanyPageButtons';

import './CompanyPage.css';

export class ComapnyPageNav extends React.Component {
    constructor(props) {
        super(props)

    this.handleRemoveCompanyClick = this.handleRemoveCompanyClick.bind(this);
    this.handleClick = this.handleClick.bind(this);
  };

  handleClick(e) {
      e.preventDefault(e);

      const selectedPage = e.target.value;
      this.props.dispatch(updateCurrentSelectedPage(selectedPage));
  };

    handleRemoveCompanyClick() {

        const { companyName } = this.props.selectedCompany;
        this.props.dispatch(removeTargetFromDatabase(companyName));
        this.props.history.push('/');
    };

    render() {
      const { selectedPage } = this.props;
      const { companyName, status } = this.props.selectedCompany;

        return (
            <Navbar>
                <Navbar.Header >
                    <Navbar.Brand>
                        {companyName}
                    </Navbar.Brand>
                </Navbar.Header>
                <Nav>
                    <NavItem onClick={this.handleRemoveCompanyClick} > Delete Target </NavItem>
                    <NavDropdown eventKey={3} title='Target Info' id='target-ifno'>
                          <MenuItem eventKey={3.1}>
                              <button className='nav-buttons'
                                      value='Target Profile'
                                      onClick={this.handleClick}>
                                      Target Profile </button>
                            </MenuItem>
                            <MenuItem eventKey={3.2}>
                                <button className='nav-buttons'
                                        value='Target Directory'
                                        onClick={this.handleClick}>
                                        Target Directory </button>
                              </MenuItem>
                              <MenuItem eventKey={3.2}>
                                  <button className='nav-buttons'
                                          value='Final Assessment'
                                          onClick={this.handleClick}>
                                          Final Assessment of Target</button>
                              </MenuItem>
                    </NavDropdown>
                    <NavDropdown eventKey={4} title='Financial Considerations' id='financial-matters'>
                        <MenuItem eventKey={4.1}>
                            <button className='nav-buttons'
                                    value='Assets and Liabilities'
                                    onClick={this.handleClick}>
                                    Assets and Liabilities </button>
                        </MenuItem>
                        <MenuItem eventKey={4.3}>
                        <button className='nav-buttons'
                                value='Financial Statements'
                                onClick={this.handleClick}>
                                Financial Statements </button>
                        </MenuItem>
                        <MenuItem eventKey={4.4}>
                        <button className='nav-buttons'
                                value='Financial Page'
                                onClick={this.handleClick}>
                                Financial Overview and Assessment </button>
                        </MenuItem>
                    </NavDropdown>
                    <NavDropdown eventKey={5} title='Legal Considerations' id='legal-matters'>
                        <NavItem eventKey={5.1}>
                            <button className='nav-buttons'
                                    value='Legal Factors'
                                    onClick={this.handleClick}>
                                    Legal Factors</button>
                        </NavItem>
                        <NavItem eventKey={5.1}>
                            <button className='nav-buttons'
                                    value='Legal Assessment'
                                    onClick={this.handleClick}>
                                    Legal Assessment</button>
                        </NavItem>
                    </NavDropdown>
                    <NavDropdown eventKey={6} title="Benefits" id="display-by-status">
                        <MenuItem eventKey={6.2}>
                            <button className='nav-buttons'
                                    value='Intellectual Property'
                                    onClick={this.handleClick}>
                                    Intellectual Property </button>
                        </MenuItem>
                        <MenuItem eventKey={6.2}>
                            <button className='nav-buttons'
                                    value='Technology'
                                    onClick={this.handleClick}>
                                    Technology </button>
                        </MenuItem>
                        <MenuItem eventKey={6.2}>
                            <button className='nav-buttons'
                                    value='Other Benefits'
                                    onClick={this.handleClick}>
                                    Other Benefits </button>
                        </MenuItem>
                    </NavDropdown>
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
