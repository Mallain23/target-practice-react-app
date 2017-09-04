import React from 'react'
import { connect } from 'react-redux'
import {  Col, Button } from 'react-bootstrap'

import { removeCompanyFromDatabase } from '../actions'

export class CompanyPageButtons extends React.Component {
    constructor(props) {
        super(props)

        this.handleEditClick = this.handleEditClick.bind(this)
        this.handleRemoveCompanyClick = this.handleRemoveCompanyClick.bind(this)
    }

    handleEditClick() {

    }
    handleRemoveCompanyClick() {

        const { companyName } = this.props.selectedCompany
        this.props.dispatch(removeCompanyFromDatabase(companyName))
        this.props.history.push('/')
    };

    render() {
        return(
            <Col xs={12} md={4}>
              <Button onClick={this.handleEditClick} > Edit </Button>
              <Button onClick={this.handleRemoveCompanyClick} > Delete Company </Button>
            </Col>
        );
    };
};

const mapStateToProps = state => {
    const { selectedCompany } = state.app

    return {
        selectedCompany
    };
};

export default connect(mapStateToProps)(CompanyPageButtons)
