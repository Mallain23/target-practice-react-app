import React from 'react'
import { connect } from 'react-redux'
import {  Col, Button, NavItem } from 'react-bootstrap'

import {  openEditPageModal } from '../actions/ShowHideActions'
import { setEditContactToFalse } from '../actions/ManagementDirectory'

export class CompanyPageButtons extends React.Component {
    constructor(props) {
        super(props)

        this.handleEditClick = this.handleEditClick.bind(this)
        this.handleAddContactClick = this.handleAddContactClick.bind(this)

    };

    handleEditClick(e) {
        e.preventDefault()
        const selectedPage = e.target.value

        this.props.dispatch(openEditPageModal(selectedPage))
    };

    handleAddContactClick(e) {
        e.preventDefault()

        this.props.dispatch(setEditContactToFalse())
    };



    renderButton() {
      const { selectedPage } = this.props
      return selectedPage === 'Company Directory' ?  <Button value={selectedPage} onClick={this.handleAddContactClick} > Add New Contact</Button> :
                              <NavItem value={selectedPage} onClick={this.handleEditClick} > Edit Information</NavItem>
    };

    render() {

        return(
            <Col xs={12} md={4}>
              {this.renderButton()}
            </Col>
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

export default connect(mapStateToProps)(CompanyPageButtons)
