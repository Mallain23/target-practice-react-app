import React from 'react'
import { connect } from 'react-redux'
import {  Col, Button } from 'react-bootstrap'

import { removeCompanyFromDatabase, openEditPageModal} from '../actions'
import { setEditContactToFalse } from '../actions/ManagementDirectory'

export class CompanyPageButtons extends React.Component {
    constructor(props) {
        super(props)

        this.handleEditClick = this.handleEditClick.bind(this)
        this.handleAddContactClick = this.handleAddContactClick.bind(this)
        this.handleRemoveCompanyClick = this.handleRemoveCompanyClick.bind(this)
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

    handleRemoveCompanyClick() {

        const { companyName } = this.props.selectedCompany
        this.props.dispatch(removeCompanyFromDatabase(companyName))
        this.props.history.push('/')
    };

    renderButton() {
      const { selectedPage } = this.props
      return selectedPage === 'Company Directory' ?  <Button value={selectedPage} onClick={this.handleAddContactClick} > Add New Contact</Button> :
                              <Button value={selectedPage} onClick={this.handleEditClick} > Edit Information</Button>
    };

    render() {

        return(
            <Col xs={12} md={4}>
              {this.renderButton()}
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
