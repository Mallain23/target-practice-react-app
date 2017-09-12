import React  from 'react';
import { Modal, Button } from 'react-bootstrap';
import { connect } from 'react-redux'

import { closeModal } from '../actions/ShowHideActions'
import AddTargetForm from './AddTargetForm'

import './Modal.css'

export class AddTargetModalContainer extends React.Component {
    constructor(props) {
        super(props)

        this.handleClose = this.handleClose.bind(this)

    };

    handleClose() {
          this.props.dispatch(closeModal())
    };

    render() {
        const { showModal } = this.props
        return (
            <div className="Add-Company-Modal">
                <Modal show={showModal}
                       onHide={this.handleClose}
                       container={this}
                       aria-labelledby="contained-modal-title">

                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title">Add New Target</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <AddTargetForm {...this.props} showModal={showModal}/>
                    </Modal.Body>
                    <Modal.Footer>
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

const mapStateToProps = state => ({
    showModal: state.app.showModal,
    companies: state.app.companies
})

export default connect(mapStateToProps)(AddTargetModalContainer)
