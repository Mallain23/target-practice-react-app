import React  from 'react';
import { Modal, Button } from 'react-bootstrap';
import { connect } from 'react-redux'

import { closeModal } from '../actions'

import EditCompanyOverviewForm from './EditCompanyOverview'
// import './Modal.css'

export class EditPageModal extends React.Component {

    constructor(props) {
        super(props)

        this.handleClose = this.handleClose.bind(this)
    };

    handleClose() {
          this.props.dispatch(closeModal())
    };

    render() {
        const { showEditModal, selectedCompany } = this.props

        return (
            <div className="Add-Company-Modal">
                <Modal show={showEditModal}
                       onHide={this.handleClose}
                       container={this}
                       aria-labelledby="edit-page-modal">

                    <Modal.Header closeButton>
                        <Modal.Title id="edit-page-modal">Edit Company Information</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <EditCompanyOverviewForm selectedCompany={selectedCompany}/>
                    </Modal.Body>
                    <Modal.Footer>
                  </Modal.Footer>
              </Modal>
            </div>
        );
    };
};

const mapStateToProps = state => {
    const { showEditModal, companies, selectedCompany } = state.app

    return {
        showEditModal,
        companies,
        selectedCompany
    };
};

export default connect(mapStateToProps)(EditPageModal)
