import React from 'react'
import { connect } from 'react-redux'
import {  Col, Button } from 'react-bootstrap'

import { removeCompanyFromDatabase, openEditPageModal } from '../actions'

export class CompanyPageButtons extends React.Component {
    constructor(props) {
        super(props)

        this.handleEditClick = this.handleEditClick.bind(this)
        this.handleRemoveCompanyClick = this.handleRemoveCompanyClick.bind(this)
    }

    handleEditClick(e) {
        e.preventDefault()
        const selectedPage = e.target.value

        this.props.dispatch(openEditPageModal(selectedPage))
    }
    handleRemoveCompanyClick() {

        const { companyName } = this.props.selectedCompany
        this.props.dispatch(removeCompanyFromDatabase(companyName))
        this.props.history.push('/')
    };

    render() {
        const { selectedPage } = this.props
        return(
            <Col xs={12} md={4}>
              <Button value={selectedPage} onClick={this.handleEditClick} > Edit </Button>
              <Button onClick={this.handleRemoveCompanyClick} > Delete Company </Button>
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
