import React  from 'react';
import { Modal, Button } from 'react-bootstrap';
import { connect } from 'react-redux'

import { closeModal } from '../actions'

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
        const { showEditModal } = this.props
        console.log(showEditModal)
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
                    </Modal.Body>
                    <Modal.Footer>
                  </Modal.Footer>
              </Modal>
            </div>
        );
    };
};

const mapStateToProps = state => ({
    showEditModal: state.app.showEditModal,
    companies: state.app.companies
})

export default connect(mapStateToProps)(EditPageModal)
