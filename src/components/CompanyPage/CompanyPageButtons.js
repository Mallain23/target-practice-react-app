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
      return selectedPage === 'Target Directory' ?  <button className='edit-button' value={selectedPage} onClick={this.handleAddContactClick} > Add New Contact</button> :
                              <button className='edit-button' value={selectedPage} onClick={this.handleEditClick} > Edit Information</button>
    };

    render() {

        return(
            <span>
              {this.renderButton()}
            </span>
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
