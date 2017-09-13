import React  from 'react';
import { Modal, Button } from 'react-bootstrap';
import { connect } from 'react-redux';

import { closeModal } from '../actions/ShowHideActions';
import { getRelevantForm } from './utils'

import './Modal.css';

export class EditPageModal extends React.Component {

    constructor(props) {
        super(props)

        this.handleClose = this.handleClose.bind(this);
    };

    handleClose() {
          this.props.dispatch(closeModal());
    };

    renderForm() {

          return this.props.childForm;
    };

    render() {
        const { showEditModal,
                companyName } = this.props

        return (
            <div className="edit-modal">
                <Modal className="edit-data-modal" show={showEditModal}
                       onHide={this.handleClose}
                       container={this}
                       aria-labelledby="edit-page-modal">

                    <Modal.Header className='modal-header' closeButton>
                        <Modal.Title id="edit-page-modal">{companyName} </Modal.Title>
                    </Modal.Header>
                    <Modal.Body className='modal-body'>
                        {this.renderForm()}
                    </Modal.Body>
                    <Modal.Footer className='moda-footer'>
                        <Button
                            disabled={this.props.submitting}
                            onClick={this.handleClose}
                            className='modal-button'>
                            Cancel
                        </Button>
                  </Modal.Footer>
              </Modal>
            </div>
        );
    };
};

const mapStateToProps = state => {
    const { showEditModal, selectedPage, showALModal, editReport  } = state.app;
    const { companyName } = state.app.selectedCompany;
    const childForm = getRelevantForm(selectedPage);

    return {
        showEditModal,
        editReport,
        showALModal,
        selectedPage,
        companyName,
        childForm
    };
};

export default connect(mapStateToProps)(EditPageModal);
